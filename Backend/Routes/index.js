const express = require('express'); 
const cors = require('cors');    
const signup = require('../Functions/User/signup');
const login = require('../Functions/User/login');
const restaurantregister = require('../Functions/Restaurant/register');
const loginrestro = require('../Functions/Restaurant/loginrestro');
const additem = require('../Functions/Restaurant/additem');
const Authenticate = require('../MiddleWare/authenticate');
const {restaurants} = require('../Functions/User/Restro');
const singlerestro = require('../Functions/User/Singlerestro');
const createOrder = require('../Functions/User/createorder');
const menurestro = require('../Functions/User/getmenu');
const histroy = require('../Functions/User/history');
const AdminSignup = require('../Functions/Admin/signup');
const AdminLogin = require('../Functions/Admin/login');
const allhistroy = require('../Functions/Admin/seependingorders');
const updatestatus = require('../Functions/Admin/updatestatus');
const {cityrestro} = require('../Functions/User/Restro');
const payment = require('../Functions/User/payment');
const router = express.Router();         


const corsOptions = {
    origin: 'https://frontend-9rbjl8kx5-krish-patels-projects-3e6b9326.vercel.app',  // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],  // Include OPTIONS for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'],  // Include necessary headers
    credentials: true
};

router.use(cors(corsOptions));

router.get('/', (req, res) => {
    res.send('Hello World');
}   )

//Users Routes  
router.post('/signup' , signup)
router.post('/login' , login)
router.get('/restaurants' , Authenticate , restaurants)  
router.post('/restaurantcity' , Authenticate , cityrestro)
router.get('/restaurant/:id' , Authenticate , singlerestro) 
router.post('/order/restaurant/:id' , Authenticate , createOrder) 
router.get('/menu/restaurant/:id' , Authenticate , menurestro)    
router.get('/history' , Authenticate , histroy)

//Restaurant Routes  
router.post('/restaurantregister' , restaurantregister)
router.post('/loginrestro' , loginrestro)   
router.post('/addmenu', Authenticate , additem)      


//Admin Routes

router.post('/admin/signup' , AdminSignup)
router.post('/admin/login' , AdminLogin)
router.get('/admin/pendingorders' , Authenticate , allhistroy)  
router.post('/admin/updateorder' , Authenticate , updatestatus) 

router.options('/payment', cors(corsOptions)); // Handle preflight requests

router.post('/payment' , cors(corsOptions), Authenticate , payment )


module.exports = router;     