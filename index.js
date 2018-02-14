const express = require('express');
const app = express();
const allProteins = require('./database/objects/HIV_SearchResults_ClassicRCSB_All.json');

const getHiv = () => {
  const proteins = allProteins["Result Set"];
  return proteins;
}

let hivObjects = getHiv()

app.get('/', (req, res) => {
  res.send("hello world");
});

app.get('/proteins', (req, res) => {
  res.send(hivObjects);
});

app.get('/proteins/start', (req, res) => {
  res.send(hivObjects.splice(0, 25))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
