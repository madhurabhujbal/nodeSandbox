const MongoClient = require('mongodb').MongoClient;

//creating database named mydatabase
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("Database created!!");
    var dbo = db.db("mydatabase");
    var myobj = [{ name: "Company Inc", address: "Highway 37" },
                 { name: "Node", address: "Main Street" },
                 { name: "Angular", address: "Rail Road" },
                 { name: "Java", address: "Ring Road" }];
    // var myquery = { name: "Company Inc", address: "Highway 37" };
    // var newvalue = { name: "My Company", address: "Bridge Way" }
    // dbo.collection("customers").insertMany(myobj, function() {
    //     if(err) throw err;
    //     console.log("Collection created");
    //     //db.close();

    // });
    //dbo.collection("customers").deleteMany({address: "Greater Manchester4"}, function(err, res) {
    dbo.collection("customers").updateMany({ name: "Angular"}, {$set: { name: "My Company", address: "Bridgeway" }}, function(err, res) {
        if(err) throw err;
        console.log("1 record updated");
        db.close();
        });
    });
