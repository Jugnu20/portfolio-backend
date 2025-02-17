const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();

app.use(cors());
app.use(express.json());

var url_link='mongodb://localhost:27017/new_db';

mongoose.connect(url_link).then(()=>{
console.log("DATABASE CONNECTED")}).catch(()=>{
    console.log("ERROR")
})

const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String,
})

const contact=new mongoose.model("contact",contactSchema)


app.post('/contact',async function(req,res){
    console.log(req.body);
    const name1=req.body.name;
    const email1=req.body.email;
    const message1=req.body.message;

    const newContact=new contact({
        name:name1,
        email:email1,
        message:message1

    })
    await newContact.save();
    res.send({message:"DATA SAVED SUCCESSFULLY"})

})

app.listen(8001,()=>{
    console.log("SERVER START")
});