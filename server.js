const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.port
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitiated: false,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('Handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(dir__name, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});