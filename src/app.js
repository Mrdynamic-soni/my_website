const express = require("express");
const path  = require("path");
const hbs = require("hbs");
const req = require("express/lib/request");
const user_data = require("./models/data");
require("./db/conn");

const app = express();
const port = process.env.PORT||3000;

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialpath);

app.use(express.urlencoded({extended:false}));
app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));


app.set("view engine","hbs");
app.set("views",templatepath);
//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact",async (req,res)=>{
    try{
        console.log(req.body);
        const result = new user_data(req.body);
        await result.save();
        res.status(201).render("index");
    }catch(err){
        res.status(500).send(err);
    }

})

//starting a server and listining to that
app.listen(port,()=>{
    console.log(`Server is up and running at localhost:${port}`);
})