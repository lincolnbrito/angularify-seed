'use strict';
angular.module('spa.notes.directives').controller('NotesDirectiveListItemsCtrl', ['$scope', function($scope){
    console.log("TESTE");
}]);

var directive = angular.module('spa.notes.directives').directive('notesDirectiveListItems', function(){
    return {
        templateUrl: 'views/notes/directives/notes-directive-list-items.html',
        controller: 'NotesDirectiveListItemsCtrl',
        restrict: 'AE',
        scope: {          
        },
        link: function postLink(scope, element, attrs) {
            console.log('trsdfsdfsdfsdf');
        }
    }; 
});

module.exports = directive;