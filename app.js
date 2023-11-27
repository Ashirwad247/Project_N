const { json } = require('body-parser');
const express = require('express');
const path = require('path')
const app = express();
let port = 5000;
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const {fetchProducts} = require('./products');




app.get('/', async (req, res)=>{
    // res.status(200)
   try{
    const products = await fetchProducts();
    console
    res.render('index', {products})
   }
   catch(err){
    res.status(500).send('Error Fetching code')
   }

})

app.listen(port, ()=>{
    console.log("listenting...")
})