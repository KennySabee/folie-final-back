require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.listen( process.env.PORT, () =>
{
    console.log('\x1b[34m ******************************************* \x1b[0m');
    console.log('\x1b[34m *********** Se levanto la api ************* \x1b[0m');
    console.log('\x1b[34m ******************************************* \x1b[0m');
})


//localhost:5000
app.get('/', (req,res) => {
    res.send('Hola mundo')
})

//Collections
//localhost:5000/customers
app.use('/customers', require ('../src/routers/customers.routers'));
//localhost:5000/shopping
app.use('/shopping', require ('../src/routers/shopping.routers'));
