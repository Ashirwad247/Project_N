const { json } = require('body-parser');
const express = require('express');
const path = require('path')
const app = express();
const cookieParser = require('cookie-parser')

//routes
const normRoutes = require('./routers/normRoutes');
const uHRouter = require('./routers/userHome')
const aboutRout = require('./routers/aboutRout')

let port = 5000;
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(cookieParser())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const {fetchProducts} = require('./controller/products');
const { User } = require('./models/user');
const { checkUser } = require('./middleware/authMware');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const uri =`mongodb+srv://amzsuper:amzsuper@cluster0.ea3wkrl.mongodb.net/amz-users?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code logic after successfully connecting to the database
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Handle the connection error appropriately
  });


app.get('*', checkUser)
app.get('/', async (req, res)=>{
    // res.status(200)
   try{
    const data= await fetchProducts();
    res.render('index', {data})
   }
   catch(err){
    res.status(500).send('Error Fetching code')
   }

})

app.use(aboutRout);
app.use(normRoutes);
app.use(uHRouter);

app.use((req, res)=>{
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    // console.log(res.statusCode)
    res.status(404).render('404', {title:'404'});
})

app.listen(port, ()=>{
    console.log("listenting...")
})