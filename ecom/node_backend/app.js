const express = require("express");
const bodyparser = require("body-parser");
const mysql = require('mysql');

const multer = require("multer");

const app = express();

if(!loggedUser)
{
    var loggedUser;

}

app.use((req, res, next)=>{

    console.log("Middleware 1");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();

});

app.use(bodyparser.json());

function myMiddleware(req, res, next)
{
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

app.get("/", (req, res)=> {

    //res.send("Home Page");

    console.log("home page");

    res.json({"name":"gopi"});

});

app.get("/about", myMiddleware, (req, res)=>{

    console.log("about page");
    res.send("Abous us page");
});

app.post('/addCatagory', (req, res) => {
    console.log(req.body);
   const name = (req.body['catName']);
  const active = (req.body['Status']);
   
   conn.query(`INSERT INTO tbl_categorynames (CategoryNames,Active) VALUES ('${name}','${active}')`, (error, rows, fields) => {
       if (!!error) {
           console.log("error",error);
       } else {
        res.json("Insert Successfully!!");
           console.log("data insert");

       }

   });

});



app.get('/getCategoryList', (req, res) => {
    console.log("hi")
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

var db;

module.exports = app;