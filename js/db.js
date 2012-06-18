console.log('database javascript loaded')

var DB;

function initDatabase(dbname, drop) {
	try {
	    if (!window.openDatabase) {
	        alert('Local Databases are not supported by your browser. Please use a Webkit browser for this app');
	    } else {
        
	        var shortName = dbname;
	        var version = '1.0';
	        var displayName = 'Deck Builder DB';
	        var maxSize = 100000; // in bytes
	        DB = openDatabase(shortName, version, displayName, maxSize);
          if(drop) {
            dropTables();
          }
          createTables();
	    }
	} catch(e) {
	    if (e == 2) {
	        // Version mismatch.
	        console.log("Invalid database version.");
	    } else {
	        console.log("Unknown error "+ e +".");
	    }
	    return;
	} 
}

/***
**** CREATE TABLE ** 
***/
function createTables(){
	DB.transaction(
        function (transaction) {
        	transaction.executeSql('CREATE TABLE IF NOT EXISTS card(id INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL);', [], nullDataHandler, errorHandler);
        }
    );
}

function insertCard(card) {
	DB.transaction(
	    function (transaction) {
        transaction.executeSql("INSERT INTO card(id, name, description) VALUES (?, ?, ?);", [1, card.name, card.description]);
	    }
	);	
}

function findCardById(id) {
	DB.transaction(
	    function (transaction) {
	        transaction.executeSql("SELECT * FROM card where id = ?;", [id], findCardByIdResultHandler, errorHandler);
	    }
	);	
} 

function findCardByIdResultHandler(transaction, results) {
  console.log(results);
}

function errorHandler(transaction, error){
 	if (error.code==1){
 		// DB Table already exists
 	} else {
    	// Error is a human-readable string.
	    console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');
 	}
    return false;
}

function nullDataHandler(){
	console.log("SQL Query Succeeded");
}

/***
**** DELETE DB TABLE ** 
***/
function dropTables(){
	DB.transaction(
	    function (transaction) {
	    	transaction.executeSql("DROP TABLE card;", [], nullDataHandler, errorHandler);
	    }
	);
	console.log("Table 'card' has been dropped.");
}

