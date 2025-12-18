const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
})

app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
})

app.get("logout",(req,res)=>{
    res.send("<h1>Logout Page</h1>");
})

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(3001,()=>{
    console.log("Server started at port 3001");
})