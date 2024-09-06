
//const http = require('http');
const express = require('express');
const app = express();  
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes= require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found</h1>');
})
 
app.use(bodyParser.urlencoded())

app.use('/', (req,res,next)=>{ 
    console.log('Always works!');
    next();
})
 
// http.createServer((req, res)=>{
//     console.log();
// })

 

app.get('/add-product',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type = "submit" value="Submit"/></form>');
    
    // console.log('Second Middleware!');
    // res.send('<h1>Second Page</h1>')
}) 

app.post('/store-product',(req,res,next)=>{

    console.log('Form data:', req.body);
    res.send('<b>Product Submitted!</b>'); 
//     console.log('First Middleware!');
//    // next();
//    res.send('<h1>First Page</h1>')
})


// app.use((req,res,next)=>{
//     console.log('Second Middleware!');
//     next();
// })

// app.use((req,res,next)=>{
//     console.log('Third Middleware!');
//     res.send('<h1>Hello From Express!</h1>');
// })

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)