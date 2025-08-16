require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');
const xss = require('xss-clean');
const app = express();
const config = require('./config/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.ieNoOpen());

const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));

app.use(xss());

const sess = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: 'strict',
      secure: true,
    },
  };

    if (config.environment === 'production') {
    app.set('trust proxy', 1); // confiar en el proxy primero(?)
  }
  app.use(session(sess));
  app.use(express.json());
  app.use(express.urlencoded(
    {
      extended: false,
      limit: '10kb',
      parameterLimit: 10,
    },
  )
);
app.use(cors({ credentials: true, origin: true }));

if (config.environment === 'production') {
  app.set('trust proxy', 1); // confiar en el proxy primero(?)
}

app.listen(process.env.PORT,()=>{
  console.log('Encuestador funcionando en el puerto:', process.env.PORT)
})