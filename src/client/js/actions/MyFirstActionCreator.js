'use strict';

var ActionCreator = require('fluxthis/build/ActionCreator');
var ACTION_SOURCES = require('../constants/ActionSources');
var ACTION_TYPES = require('../constants/ActionTypes');

module.exports = new ActionCreator({
	displayName: 'Todo',
	actionSource: 'UI_TODO',
	createTodo: {
		actionType: 'ADD_TODO',
		payloadType: ActionCreator.PayloadTypes.string.isRequired
	},
	removeTodo: {
		actionType: 'REMOVE_TODO',
		payloadType: ActionCreator.PayloadTypes.number.isRequired
	},
	toggleTodo: {
		actionType: 'TOGGLE_TODO',
		payloadType: ActionCreator.PayloadTypes.number.isRequired
	}
});