const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json({message: 'Server ir up'});
})

app.listen(3333)