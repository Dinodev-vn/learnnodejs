const express = require('express')
// import express from 'express';
const app = express()
const port = 5665

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})