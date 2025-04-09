var express = require('express');
var router = express.Router();
var productModel = require('../model/product');
router.post('/',(req,res)=>{
    try{
        productModel(req.body).save();
        res.send("product added")
    }catch(error){
        res.send(error)
    
    
    }
})

router.get('/',async(req,res)=>{
    try {
        
    var data = await productModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id);
        await productModel.findByIdAndDelete(req.params.id);
        res.send("data deleted")
        
    } catch (error) {
        res.send(error)
        
    }
})


router.put('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("data edited")
    } catch (error) {
        res.send(error)
        
    }
})
    
module.exports = router