var mongoose = require('mongoose');
    var productSchema = mongoose.Schema({
        pname:String,
        pQuantity:String,
        pPrice:Number,
        pBrand:String,
        

    })
var productModel = mongoose.model("product",productSchema);
module.exports = productModel;
