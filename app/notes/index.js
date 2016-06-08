require('./controllers');
require('./services');

var mod = angular.module('spa.notes', ['spa.notes.controllers','spa.notes.services']);
module.exports = mod;