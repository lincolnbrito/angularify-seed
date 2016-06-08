'use strict';
module.exports = angular.module('spa.notes.controllers').controller('NotesCreateController',['NotesService',function(NotesService){
	var self = this;
    self.heading = 'Notes - Create';
    self.links=[];
    console.log(NotesService.list());
}]);