const mongoose = require("mongoose")
const { Schema } = require("mongoose");


const todoSchema = new Schema(
    {
        name:String,
        rool: String,
        priority:String,
    }
    
)
module.exports = mongoose.model("Task", todoSchema)