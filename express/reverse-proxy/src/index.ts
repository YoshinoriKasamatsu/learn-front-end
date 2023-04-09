import express from "express";
import http from "http";

import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

// Proxyのオプション
const options = {
    target: 'http://localhost:4200', // プロキシ先のURL
    changeOrigin: true, // プロキシ先のホスト名を変更する
    onProxyReq: (proxyReq, req, res) => {
      console.log(`Request: ${req.method} ${req.url} ${req.headers}`);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log(`Response: ${proxyRes.statusCode}`);
    }
  };
  
// Proxyの作成
const proxy = createProxyMiddleware(options);

app.use('/', proxy);
app.listen(3000);