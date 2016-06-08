'use strict';
module.exports = angular.module('spa.notes.controllers').controller('NotesListController',['NotesService',function(NotesService){
	var self = this;
    self.heading = 'Notes - List';
    self.links=[];
    console.log(NotesService.list());
}]);