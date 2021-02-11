
var express = require('express');
var router = express.Router();

const TEST_USER = {
	username: 'Andrew',
	password: 'Hellosickmoney'
}

const { username, password } = TEST_USER


var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://Andrew:Hellosickmoney@<cluster>-vgz77.azure.mongodb.net/test?retryWrites=true&w=majority";
var url = `mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/test?retryWrites=true&w=majority`;

// mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority
// mongodb://mongopots:BxpYBQ06UuWt7S8KD9wyVQ5N4kesVb7Ib8zaC5xAubmzwz6Cq2qk1u5X8UHHMqb2sYnMhnrJNIr8kPEpNsUrKQ==@mongopots.mongo.cosmos.azure.com:10255/?ssl=true&appName=@mongopots@
console.log(MongoClient)
console.log('test')

router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mongodb");
		dbo.collection("collection1").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;