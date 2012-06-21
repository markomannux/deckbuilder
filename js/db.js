console.log('database javascript loaded')

entityManager = {
  DB:undefined, 
  initDatabase: function(dbname, drop) {
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
          this.dropTables();
        }
        this.createTables();
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
  },

createTables:function(){
               DB.transaction(
                   function (transaction) {
                     transaction.executeSql('CREATE TABLE IF NOT EXISTS card(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT NOT NULL);', [], this.nullDataHandler, this.errorHandler);
                   }
                   );
             },

insertCard:function(card) {
             DB.transaction(
                 function (transaction) {
                   transaction.executeSql("INSERT INTO card(name, description) VALUES (?, ?);", [card.name, card.description],
                     function(tx, rs) {
                        console.log('setting card id: ' + rs.insertId);
                        console.log(card.name);
                        card.set('id', rs.insertId);
                     }, this.errorHandler);
                 }
                 );	
           },

findCardById:function(id) {
               DB.transaction(
                   function (transaction) {
                     transaction.executeSql("SELECT * FROM card where id = ?;", [id], this.findCardByIdResultHandler, this.errorHandler);
                   }
                   );	
             },

findCardByIdResultHandler:function(transaction, results) {
                            console.log(results);
                          },

errorHandler:function(transaction, error){
               if (error.code==1){
                 // DB Table already exists
               } else {
                 // Error is a human-readable string.
                 console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');
                     }
                     return false;
                     },

nullDataHandler:function(){
                  console.log("SQL Query Succeeded");
                },

dropTables:function(){
             DB.transaction(
               function (transaction) {
                 transaction.executeSql("DROP TABLE card;", [], this.nullDataHandler, this.errorHandler);
               }
               );
             console.log("Table 'card' has been dropped.");
           }
}
