// const http = from require('http');
import http from 'http'; // package.json 에 "type": "module", 적어줘야 함
// const path = require('path');
import * as path from 'path';
// const express = require('express');
import express from 'express';

// Router는 필요없음

const port = 8080;
const application = express().use(express.static(path.join(path.resolve('.'), 'public'))); // __dirname을 path.resolve('.')으로 변경 (현재 위치)

http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    .listen(port);

    
// 실행 
// PS C:\douzone2021\eclipse-workspace\react-practices\01.basics\ex01> npm start