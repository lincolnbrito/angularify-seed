'use strict';
module.exports = angular.module('spa.notes.controllers').controller('NotesControllerList',['NotesService',function(NotesService){
	var self = this;
    self.heading = 'Notes - List';
    self.links=[];
    console.log(NotesService.list());
}]);