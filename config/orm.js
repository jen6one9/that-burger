var connection = require("./connection.js");
 
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// Helper function for SQL syntax.
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
	var arr = [];

	for (var key in ob){
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
};

//Object for all our SQL statement functions.
var orm = {
	// Function that returns all table entries
	selectAll: function(tableInput, cb) {
		// Construct the query string that return all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";
		// Perform the database query
		connection.query(queryString, function(err, result){
			if (err) {
				throw err; 
			}
			// Return results in callback
			cb(result);
		});
	},
	// Function that insert a single table entry
	insertOne: function(table, cols, vals, cb){
		// Construct the query string that insert a single row into the target table
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			// Return results in callback
			cb(result);
		});
	},
	// Function that updates a single table entry
	updateOne: function(table, objColVals, condition, cb){
		// Construct the query string that update a signle entry in the target table
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		// console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			// Return results in callback
			cb(result);
		});
	}
};



var orm = {
  selectAll: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
 insertOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, INSERT(??) FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

 

module.exports = orm;



