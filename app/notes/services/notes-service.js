'use strict';
module.exports = angular.module('spa.notes.services').service('NotesService',["NotesUtilsService",function(NotesUtilsService){
	var self = this;
	
	var items = [
        {id: 1, label: "Item 0"},
        {id: 2, label: "Item 1"},
    ];

    NotesUtilsService.convert(items);

	self.list = function(){
        return items;
    };

    self.add = function(item){
        items.push(item);
    };
}]);