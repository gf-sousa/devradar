const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://gfsousa:gfsousa1@cluster0-th2rb.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(express.json());
app.use(routes);
app.listen(3333);