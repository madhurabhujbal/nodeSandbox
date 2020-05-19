const MongoClient = require('mongodb').MongoClient;

//creating database named mydatabase
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    //console.log("Database created!!");
    var dbo = db.db("mydatabase");
    var myobject = {name: "My Company", address: "Greater Manchester"};
    // dbo.createCollection("customers", function(err, res) {
    // if(err) throw err;
    //     console.log("Collection created!!");
    //dbo.collection("customers").insertOne(myobject, function(err, res) {
    dbo.collection("customers").findOne({}, function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});