import mongoose from "mongoose";
/*
DONT TOUCH THIS FILE <3
WE ARE ALL SHARING THE SAME DB
PLEASE DONT TOUCH THIS FILE
*/
mongoose.connect("mongodb://localhost:27017/day17", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
    console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
