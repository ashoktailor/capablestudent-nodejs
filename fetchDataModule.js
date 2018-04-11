exports.fetchData = function () {
    var AWS = require('aws-sdk');

    AWS.config.region = process.env.REGION

    // Create DynamoDB document client
    var docClient = new AWS.DynamoDB.DocumentClient();

    // JSON object containing parameters needed to get items from table
    var params = {
        TableName: process.env.STARTUP_SIGNUP_TABLE
    };

    var myData;

    console.log("About to fetch data for table: " + process.env.STARTUP_SIGNUP_TABLE);
    docClient.scan(params, function(err, data) {
        if (err) {
            console.log("Fetch data failed with error: " + err);
	    myData = err;
	} else {
	    console.log("Fetch data success!");
	    //console.log(data);
	    myData = data;
	}
    });

    return myData;
};
