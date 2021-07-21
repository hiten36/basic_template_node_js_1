const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
const app=express();
const port=process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'static')));
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log('Listening at port ',port);
})