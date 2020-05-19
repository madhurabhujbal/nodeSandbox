const MongoClient = require('mongodb').MongoClient;

//creating database named mydatabase
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    //console.log("Database created!!");
    var dbo = db.db("mydatabase");
    dbo.collection("customers").deleteMany({address: "Greater Manchester4"}, function(err, res) {
        if(err) throw err;
        console.log(res.result.n);
        db.close();
        });
    });
