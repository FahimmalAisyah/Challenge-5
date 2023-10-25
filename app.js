require('dotenv').config('.env');
require('./helpers/init_mongodb');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const createError = require('http-errors');
const {verifyAccessToken} = require('./helpers/jwt_helper')
const connectDB = require('./server/config/db')
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const AuthRoute = require('./server/Routes/Auth.route');


const app  = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.use(express.static('public'))

// app.use(expressLayout)
// app.set('layout', './layouts/main')
// app.set('view engine', 'ejs')

//HomePage
app.get('/' ,verifyAccessToken,require('./server/Routes/admin.route'));

//admin form
// app.post('/add', require('./server/Routes/admin.route'))

//ifError
// app.get('*', (req, res)=>{
//     res.status(404).render('404')
// })


app.use('/auth', AuthRoute)



const options = {
    definition:{
        openapi: "3.0.3",
        info:{
            title:"Fahimmal chapter 5",
            description:"Tugas API CH5"
        },
        servers:[
            {url: "http://localhost:3000",},
        ],
    },
    apis : ["./server/Routes/Auth.route.js"]
}

const spacs = swaggerjsdoc(options)
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(spacs)
)

const PORT = process.env.PORT || 3000;

connectDB()

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}/api-docs`);
});

