var app = require('./app');
var connection = require('./connection');
const port = process.env.PORT || 3560;

connection.connect((err) => {
    if (!err) {
        app.listen(port, function(){
            console.log('App listening on port: '+port);
        });
        console.log("Database is connected and running...");
    } else {
        console.log("Error: Database not connected ;(");    
    }
});

// app.get("/", function(req, res){
//     connection.query
// });