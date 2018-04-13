'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';
const hostname = os.hostname();
const color = GetEnvironmentVar('COLOR', '#B1C554');

// App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('index', {
        'hostname': hostname,
        'color': color
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function GetEnvironmentVar(varname, defaultvalue) {
    var result = process.env[varname];
    if (result != undefined)
        return result;
    else
        return defaultvalue;
}
