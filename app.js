const { json } = require('body-parser');
const express = require('express');
const path = require('path')
const app = express();
let port = 5000;
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const {fetchProducts} = require('./products');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res)=>{
    // res.status(200)
   try{
    const data= await fetchProducts();
    console.log(data.products.find(product=>product.id==1))
    res.render('index', {data:data})
   }
   catch(err){
    res.status(500).send('Error Fetching code')
   }

})




app.get('/register',(req, res)=>{
    res.render('register')
})

app.get('/login',(req, res)=>{
    res.render('login')
})

app.get('/about.html', (req,res)=>{
    res.redirect('/about')
})



app.get('/about',(req, res)=>{
    res.render('about')
})


app.get('/user',async (req,res)=>{
    try{
        const data= await fetchProducts();
        console.log(data.products.find(product=>product.id==1))
        res.render('user', {data:data})
       }
       catch(err){
        res.status(500).send('Error Fetching code')
       }
})


app.use((req, res)=>{
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    // console.log(res.statusCode)
    res.status(404).render('404', {title:'404'});
})

app.listen(port, ()=>{
    console.log("listenting...")
})