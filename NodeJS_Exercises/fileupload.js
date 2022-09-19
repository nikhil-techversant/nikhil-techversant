const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

const fileStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now() + "-" + file.originalname)
    }
})


const upload = multer({ storage:fileStorage})


app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
})

app.post("/uploads",upload.single("image"), (req,res)=>{
    console.log(req.file);                                         
    res.status(202).send("File Uploaded Successfully")
});

app.get("/download",(req,res)=>{
    fs.readdir(
        path.resolve(__dirname,'./uploads'),
        (err,files)=>{
            if(err) throw err;
            for(let file of files){
                console.log(file)
            }
        }
    );
    res.send("file downloaded") 
})


app.get("*",(req,res)=>{
    res.status(404).send("Page Not Found")
})


const PORT = process.env.PORT || 8088;
app.listen(PORT,()=>console.log(`server started on ${PORT}`))