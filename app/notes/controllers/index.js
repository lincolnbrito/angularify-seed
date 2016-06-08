//Notes Controllers
var controllers = angular.module('spa.notes.controllers',[]);
require('./notes-controller-create');
require('./notes-controller-edit');
require('./notes-controller-list');

module.exports = controllers;
