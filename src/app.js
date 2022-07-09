const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main.routes');

const app = express();


app.set('view  engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname, '..', 'public','css')));
app.use(express.json());
app.use('/', mainRouter);

console.log(path.join(__dirname, '..', 'public','css'));
app.listen(5500, () => {
    console.log('Server start');
});

module.exports = app;
