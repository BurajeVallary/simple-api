//commonjs to import modules
const express=require("express")
const fs=require("fs")
const app=express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//rourtes or endpoints , our api endpoints
// examples of endpoints: http://localhost:3000/, https://localhost:3000/login
app.get("/",async(req,res)=>{
    try {
        const html_path="./index.html"
        fs.readFile(html_path,"utf8",(err,html)=>{
            if(err){
                res.status(505).send({error:err})
            }
            res.send(html)
        })
    } catch (error) {
        res.json({error:error.message})
    }
})

//http://localhost:3000/person method:get
app.get("/person",async(req,res)=>{
    try {
       const path="./person.html"  
       fs.readFile(path,"utf8",(err,html)=>{
        if(err){
            console.log(err)
        }
        res.send(html)
       })
    } catch (error) {
        res.json({error:error.message})
    }
})


app.get("/data",async(req,res)=>{
    try {
       const path="./data.json"  
       fs.readFile(path,"utf8",(err,json)=>{
        if(err){
            console.log(err)
        }
        res.send(json)
       })
    } catch (error) {
        res.json({error:error.message})
    }
})

//listening to port 3000
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})