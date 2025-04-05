const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.Port || 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projetdesession',
  socketPath:"Applications/XAMPP/xamppfiles/temp/mysql/mysql.sock"
});
