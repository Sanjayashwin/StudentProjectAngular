const express = require("express");
const bodyparser = require("body-parser");
const mysql = require('mysql');

const multer = require("multer");

const fileUpload = require('express-fileupload');
const fs = require('fs');

const app = express();

if (!loggedUser) {
    var loggedUser;

}

app.use((req, res, next) => {

    console.log("Middleware 1");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();

});
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(bodyparser.json());

function myMiddleware(req, res, next) {
    console.log("My Middleware");
    next()
}
const conn = mysql.createConnection({


    host: 'localhost',
    user: 'root',
    password: 'sanjay',
    database: 'ecommarce'
});

conn.connect((err) => {
    if (!!err) {
        console.log("error");
    } else {
        console.log("connect");
    }

});

app.get("/", (req, res) => {

    //res.send("Home Page");

    console.log("home page");

    res.json({ "name": "gopi" });

});

app.get("/about", myMiddleware, (req, res) => {

    console.log("about page");
    res.send("Abous us page");
});

//add Category
app.post('/addCatagory', (req, res) => {
    console.log(req.body);
    const name = (req.body['catName']);
    const active = (req.body['Status']);

    conn.query(`INSERT INTO tbl_categorynames (CategoryNames,Active) VALUES ('${name}','${active}')`, (error, rows, fields) => {
        if (!!error) {
            console.log("error", error);
        } else {
            res.json("Insert Successfully!!");
            console.log("data insert");

        }

    });

});


// get category List
app.get('/getCategoryList', (req, res) => {
    console.log("hi");

    conn.query("SELECT * FROM ecommarce.tbl_categorynames", (error, rows, fields) => {

        if (!!error) {
            console.log("error");
        } else {
            // const num = rows.length;
            const img = (rows);

            //const con = new Buffer(img,'base64');
            res.send(img);
            console.log("data get");

        }

    });


});


//add Get subcatagory List
app.post('/addSubCatagory', (req, res) => {
    console.log(req.body);
    const catid = (req.body['catid']);
    const subcatName = (req.body['SubcatName']);
    const status = (req.body['subStatus']);

    conn.query(`INSERT INTO tbl_subcategorynames (CategoryID,SubCategoryName,Active) VALUES ('${catid}','${subcatName}','${status}')`, (error, rows, fields) => {
        if (!!error) {
            console.log("error", error);
        } else {
            res.json("Insert Successfully!!");
            console.log("data insert");

        }

    });

});


//Get subcatagory List
app.get('/getSubCategoryList', (req, res) => {
    console.log("hi");

    conn.query("SELECT  ecommarce.tbl_subcategorynames.SubCategoryID,ecommarce.tbl_subcategorynames.SubCategoryName,ecommarce.tbl_subcategorynames.Active,(select CategoryNames  from ecommarce.tbl_categorynames where ecommarce.tbl_categorynames.CategoryID=ecommarce.tbl_subcategorynames.CategoryID) as catname FROM ecommarce.tbl_subcategorynames", (error, rows, fields) => {

        if (!!error) {
            console.log(error);
        } else {
            // const num = rows.length;
            const img = (rows);

            //const con = new Buffer(img,'base64');
            res.send(img);
            console.log("data get");

        }

    });


});


//save vendor
app.post('/vendorform', (req, res) => {
    console.log(req);
    const FirstName = (req.body['FirstName']);
    const LastName = (req.body['Lastname']);
    const FathersName = (req.body['FathersName']);
    const MothersName = (req.body['MothersName']);
    const Address = (req.body['Address']);
    const District = (req.body['District']);
    const Pincode = (req.body['Pincode']);
    const State = (req.body['State']);
    const Country = (req.body['Country']);
    const AreaCode = (req.body['AreaCode']);
    const MobileNumber = (req.body['MobileNumber']);
    const EmailID = (req.body['EmailID']);
    const Shopname = (req.body['Shopname']);
    const PanCard = (req.body['PanCard']);
    const DOB = (req.body['DOB']);
    const Description = (req.body['Description']);
    const file = req.files.image;
     filename = file.name;

    //console.log(LastName);
   // req.files.image="KANI2533.JPG"
    
    //filename = "KANI2533.JPG";
    file.mv("./node_backend/uploads/" + filename, function (err) {
        if (err) {
            console.log(err)
            res.send("error occure")
        } else {
            const binData = fs.readFileSync("./node_backend/uploads/" + filename);
            const base64 = new Buffer(binData).toString("base64");

            conn.query(`INSERT INTO tbl_vendor (FirstName, LastName, FathersName, MothersName,Address, District,VendorPhoto, Pincode, State, Country, AreaCode, MobileNumber, EmailID, Shopname, PanCard, DOB, Description) VALUES 
         ('${FirstName}','${LastName}','${FathersName}','${MothersName}','${Address}','${District}','${base64}','${Pincode}','${State}','${Country}','${AreaCode}',
         '${MobileNumber}','${EmailID}','${Shopname}','${PanCard}','${DOB}','${Description}')`, (error, rows, fields) => {
                if (!!error) {
                    console.log("error", error);
                } else {
                    res.json(rows);
                    console.log("data insert");
                }
           }
            )}
    })
});



var db;

module.exports = app;