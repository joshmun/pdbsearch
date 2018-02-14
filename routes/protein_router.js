const express = require("express");
const app = express()
const hivObjects = require("../database/hivObjects");

app.get('/proteins', (res, req) => {
  res.send(hivObjects)
})

// module.exports = protein_router;
