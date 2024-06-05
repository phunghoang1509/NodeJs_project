const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 3000;

//Xử lý dữ liệu gửi về
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
// app.use(morgan("combined"));
//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
//Set and use handlebars
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources/views'));

//route //Action ---> Dispatcher --> function handler
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
