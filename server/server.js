require('dotenv').config();
const { CONNECTION_STRING, PORT, SESSION_SECRET, STRIPE_SECRET } = process.env; 

const   express = require('express')
        , bodyParser = require('body-parser')
        , massive = require('massive')
        , faker = require('faker')
        , session = require('express-session')
        , ctrl = require('./controller');


const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// massive(CONNECTION_STRING)
//     .then( db => {
//         app.set('db', db)
//         console.log('DB Connected')
//     })
//     .catch( err => console.log(err));

app.post('/api/payment', ctrl.handlePayment)

app.listen( PORT || 3010, () => console.log(`Hard to port ${PORT || 3010}`));
