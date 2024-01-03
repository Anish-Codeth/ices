const express=require('express')
const mongooose=require('mongoose')
connection_key="mongodb+srv://anidh:mongodb333@cluster0.6zah1lv.mongodb.net/?retryWrites=true&w=majority"
require('dotenv').config()
const profile=require('./schemas/schema1')


const app=express()
app.use(express.json())

app.post('/api1',async (req,res)=>{
try{
await profile.create(req.body)
}
catch(err)
{
    return res.json(err)
}
res.json({"msg":req.body})
})

app.get('/api1',async(req,res)=>{
const mongres=await profile.find()
res.json(mongres)
})

app.delete('/api1',async(req,res)=>{
    const {name}=req.body
    const mongres=await profile.deleteOne({name})
res.json(mongres)
})


const start=async ()=>{
    try{
     await mongooose.connect(process.env.connection_key)
     app.listen(8000,()=>{
        console.log('listening on port 8000')
     })
    }
    catch(err){
        console.log(err)
    }
}

start()