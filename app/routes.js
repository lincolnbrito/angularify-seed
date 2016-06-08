/**
 * Created by Marco Romero on 1/8/2015.
 */
'use strict';
function Routes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/landing.html',
            controller:'LandingController as landing'
        })
        .state('todos', {
            url: '/todos',
            templateUrl: 'views/todos.html',
            controller:'TodosController as todos'
        })
        .state('notes', {
            url: '/notes',
            templateUrl: 'views/notes-view-list.html',
            controller:'NotesControllerList as notes'
        });
}

module.exports = Routes;