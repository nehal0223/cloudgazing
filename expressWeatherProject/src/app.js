const express=require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

//public static path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path)

//builtin middleware
app.use(express.static(staticPath));


//routing
app.get("/",(req,res) =>{
    res.render('index')
});

app.get("/about",(req,res) =>{
    res.render('about');
});

app.get("/weather",(req,res) =>{
    res.render('weather');
});

app.get("*",(req,res) =>{
    res.render('404error', {
        errorMsg: 'Opps! page not found'
    });
});

app.listen( port , () =>{
    console.log(`Server is listening on port ${port}`);
});
