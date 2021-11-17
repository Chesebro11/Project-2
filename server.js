const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: SequelizeStore
    })
};
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// adding path for public folder
const path = require('path');
// handlebars consts
const Handlebars = require("handlebars");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as the engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// join public folder path
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
// enable routes
app.use(routes);

sequelize.sync({ force: false }).then (() => {
    app.listen(PORT, () => console.log('Now listening'))
});
