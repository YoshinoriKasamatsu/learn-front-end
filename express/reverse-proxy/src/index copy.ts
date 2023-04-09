import express from "express";
import http from "http";

import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.get('/', (req, res) => {
    


    const options = {
        hostname: 'localhost',
        port: 4200,
        path: req.path,
        method: 'GET',
        Headers: req.headers
      };
    console.log("req");
    console.log(options);
    const res2 = http.request(options, (response) => {
        response.on('data', (chunk) => {
            console.log("chunk");
            console.log(response.headers);
        });
    });
    res2.end();
});


app.get('/api', (req, res) => {
    
    const options = {
        hostname: 'localhost',
        port: 4200,
        path: req.path,
        method: 'GET',
        Headers: req.headers
      };
    http.request(options, (response) => {
        response.pipe(res);
    });
});

app.post('/api', (req, res) => {
    
    const options = {
        hostname: 'localhost:4200',
        path: req.path,
        method: 'POST',
        Headers: req.headers,
        body: req.body
      };
    http.request(options, (response) => {
        response.pipe(res);
    });
});


app.use('/', createProxyMiddleware({ target: 'http://localhost:4200', changeOrigin: true }));
app.listen(3000);