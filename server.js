const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/Lyceum/Api/aluno/ADFCEB6D496AC725A0E49ED86BA3D8D2/AutenticarCarteirinha', function(req, res) {
  res.sendFile(path.join(__dirname, '/ADFCEB6D496AC725A0E49ED86BA3D8D2.html'));
});

app.get('/Lyceum/Api/aluno/ADFCEB6D482BD515A0E49ED86JC5D78/AutenticarCarteirinha', function(req, res) {
  res.sendFile(path.join(__dirname, '/ADFCEB6D482BD515A0E49ED86JC5D78.html'));
});

app.use(express.static('images'));

app.listen(port);

console.log('Server started at http://localhost:' + port);
