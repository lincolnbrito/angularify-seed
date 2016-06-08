require('./controllers');
require('./services');
require('./directives');

var mod = angular.module('spa.notes', ['spa.notes.controllers','spa.notes.services','spa.notes.directives']);
module.exports = mod;