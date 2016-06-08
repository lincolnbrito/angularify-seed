/* imports */
require('./controllers');
require('./services');
require('./directives');

/* module definition */
var mod = angular.module('spa.notes',
    [
        /* module dependencies here*/
        'spa.notes.controllers',
        'spa.notes.services',
        'spa.notes.directives'
    ]
);
module.exports = mod;