let mongose = require("mongoose")
let dBURI = "mongodb://localhost:27017"

mongose.connect(dBURI,{
    //useNewURLParser: true
});

mongose.connection.on("connected", () =>{
    console.log("connected TO MOngodb");

});

mongose.connection.on("error", (error) =>{
    console.log("connection Error:" + error);

});

mongose.connection.on("diconnected", () =>{
    console.log("disconnected From MongoDB");

});


