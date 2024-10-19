const express=require('express');
const cors=require('cors')
const app=express();



app.use(cors());

app.use(express.json());

app.get('/',function(req,res){
    res.send('WELCOME GURRUUU')
})

app.get('/home',function(req,res){
    res.send('register page')
})

app.get('/register',function(req,res){
    res.send('')
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("DONE");
})

app.listen(8000,()=>{
    console.log('server started guruuuuu')
})