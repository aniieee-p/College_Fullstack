const express = require('express');
const path = require('path');
const app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));

//what is path .join?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", {title: "Home Page", name: "aniieee", email:"contact@gmail.com"});
});

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About_us"
    });
})

app.get("/contact",(req,res)=>{
    res.render("contact"),{
        title:"Contact-us"
    }
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});