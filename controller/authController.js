const {User} = require('../models/user')
const {fetchProducts} = require('./products')
const jwt = require('jsonwebtoken')
//Update handleErrors function
const handleErrors = (err) => {
    console.log(err.message, "dkjhsdkhs  ", err.code);
    let errors = { name: '', password: '' };

    if (err.code === 11000) {
        errors.name = 'That name is already taken';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach((error) => {
            if (error.properties && error.properties.type === 'minlength') {
                errors.password = error.properties.message;
            }

            if (error.properties && error.properties.message.includes('Password must contain')) {
                errors.password = error.properties.message;
            }
        });
    }

    return errors;
};


const maxAge = 3*24*60*60
const createToken=(id)=>{
    return jwt.sign({id},'amz secret', {
        expiresIn:maxAge
    });
}

signup_get=(req, res)=>{
    res.redirect('/register')
}

resgister_get=(req, res)=>{
    res.render('register')
}

login_get=(req, res)=>{
    res.render('login')
}

// Update the /register route
post_register= async (req, res) => {
    const { name, password } = await req.body;
    try {
        if (!name || !password) {
            return res.status(400).json({ errors: { name: '', password: 'Name and password are required' } });
        }
        const user = await User.create({ name, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge*1000});
        return res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        return res.status(400).json({ errors });
    }
};


login_post= async(req, res)=>{
    const {name, password } = await req.body;
    // console.log(name, password)
    try{
        const user = await User.findOne({name:name});
        console.log(user)
        if(!user){
            return res.status(400).json({errors:'That user does not exist'})
        }
        // console.log(user.password)
        if (user.password !== password) {
            return  res.status(400).json({ errors: 'Invalid password' });
        }
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge*1000});
        return res.status(200).json({user:user._id})

    }
    catch(err){
        const errors = handleErrors(err)
        return  res.status(400).json({errors})
    }
}

users_home=async (req,res)=>{
    try{
        
        const data= await fetchProducts();
        const username = res.locals.user?res.locals.username:'Guest'
        // console.log(data.products.find(product=>product.id==1))
        res.render('user', {data:data, username})
       }
       catch(err){
        res.status(500).send('Error Fetching code')
       }
}


log_out=(req, res)=>{
    res.cookie('jwt', '', {maxAge:1})
    res.redirect('/')
}

about_HTM = (req,res)=>{
    res.redirect('/about')
}

about_func=(req, res)=>{
    res.render('about')
}

module.exports={
    signup_get, resgister_get, login_get, users_home, about_HTM, about_func, post_register, login_post, log_out
}