const { request, response } = require('express');
const express = require('express');

const app = express();


app.use('views', path.join(__dirname, '/views'));

app.get('/',(request, response) => {
    response.render('index');
})

app.listen(3333)