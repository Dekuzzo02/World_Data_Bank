var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; 

const uri = "mongodb+srv://vdicuzzo:Inguine23@cluster0.lv4ye.mongodb.net/test";

router.get('/coll1', function (req, res, next) {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("World_Data_Bank").collection("1"); 
        
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else console.log(result);
            client.close(); 
        }); 

    });
    res.send(result);
});






module.exports = router;