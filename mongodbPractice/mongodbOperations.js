const MongoClient = require('mongodb').MongoClient;

//creating database named mydatabase
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    //console.log("Database created!!");
    var dbo = db.db("mydatabase");
    var myobject = [{name: "My Company", address: "Greater Manchester"},
                    {name: "My Company1", address: "Greater Manchester1"},
                    {name: "My Company2", address: "Greater Manchester2"},
                    {name: "My Company3", address: "Greater Manchester3"},
                    {name: "My Company4", address: "Greater Manchester4"}];
    dbo.createCollection("customers", function(err, res) {
    if(err) throw err;
        //console.log("Collection created!!");
    //dbo.collection("customers").insertMany(myobject, function(err, res) {
    //dbo.collection("customers").find({}, { projection: { _id:0 }, sort}).toArray(function(err, res) {
    dbo.collection("customers").find({address: "Greater Manchester"}, {projection: {_id: 0, address: 0}}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
        });
    });
});