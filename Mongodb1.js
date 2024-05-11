const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/admin")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("error");
    })

const regschema = new mongoose.Schema({
    cemail: {
        type: String,
        required: true
    },
    leave: {
        type: Number,
        required: true
    }
})
const collection = new mongoose.model("applyleave", regschema)
module.exports = collection;