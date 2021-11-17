
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// adding path for public folder
const path = require('path');

// handlebars consts
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'I dont know what this means',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as the engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// join public folder path
app.use(express.static(path.join(__dirname, 'public')));

// enable routes
app.use(routes);

sequelize.sync({ force: false }).then (() => {
    app.listen(PORT, () => console.log('Now listening'))
});
