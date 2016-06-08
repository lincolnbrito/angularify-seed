'use strict';
module.exports = angular.module('spa.notes.services').service('NotesUtilsService',[function(){
	var self = this;
	
	self.convert = function(item){
        console.log('Converting...',item);
    };

}]);