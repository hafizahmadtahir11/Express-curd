const mongoose = require("mongoose");
let productschema = mongoose.Schema({
    Name:String,
    Price:String,
});

let Product = mongoose.model("Product",productschema);
module.exports=Product;