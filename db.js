var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kripa:kripakm@cluster0.5ieit3m.mongodb.net/db4?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{console.log(err)})