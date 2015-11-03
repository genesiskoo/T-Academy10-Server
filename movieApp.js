var express = require('express');
var app = express();
var bodyParser = require('body-parser'),
    logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');

var router = require('./router');

