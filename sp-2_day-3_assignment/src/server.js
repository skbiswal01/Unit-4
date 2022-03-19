const connect = require("./configs/db.js") ;
const app = require("./index.js");

app.listen(5000, async () => {
    try {
        await connect();
        console.log("Listening to port 5000");

    } catch (error) {
        console.log("Please check errors");
    }
});