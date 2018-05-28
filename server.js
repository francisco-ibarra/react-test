/*import { createServer } from 'https';
import express from 'express';
import path from 'path';*/

//const { createServer } = require('https');
const { createServer } = require('http');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
const dev = app.get('env') !== 'production';

//production environment setup
if(!dev) {
    app.disable('x-powered-by');

    app.use(express.static(path.join(__dirname,'build')));

    app.get('/*', (req,res) => {
       res.sendFile(path.join(__dirname, 'build','index.html'));
    });
}

const server = createServer(app);

server.listen(PORT, err => {
    if(err) throw err;
    console.log('Server started: '+PORT);
});


