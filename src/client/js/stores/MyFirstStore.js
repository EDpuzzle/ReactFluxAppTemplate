'use strict';

var ImmutableStore = require('fluxthis/src/ImmutableStore');
var ACTION_TYPES   = require('../constants/ActionTypes');
var Immutable      = ImmutableStore.Immutable;

module.exports = new ImmutableStore({
	displayName: 'MyFirstStore',
	init: function () {
		this.todos = Immutable.List();
		this.lastID = 0;

		// TODO: Use ConstantCollections instead of Strings
		// We pass ActionType/ActionSource : PrivateMethods
		this.bindActions(
      'ADD_TODO', this.addTodo,
      'REMOVE_TODO', this.removeTodo,
      'TOGGLE_TODO', this.toggleTodo
    );
	},
	public: {
		getTodos: function () {
			return this.todos;
		}
	},

	// Note: Private methods being called is what triggers your view to update!
	private: {
		addTodo: function (description) {
      var todo = Immutable.fromJS({
        description : description,
        id          : this.lastID++,
        done        : false
      });

      // update this.todos with the new immutable list, containing the new todo
      this.todos = this.todos.push(todo);
	  },
	  removeTodo: function (id) {
      var index = this.todos.findIndex(function (todo) {
        return todo.get('id') === id;
      });

      // remove the todo with the ID of id, but only if we have it to begin with
      this.todos = index > -1 ?
        this.todos.remove(index) :
        this.todos;
	  },
	  toggleTodo: function (id) {
      var index = this.todos.findIndex(function (todo) {
        return todo.get('id') === id
      });

      this.todos = this.todos.update(id, function (todo) {
        return todo.set('done', !todo.get('done'));
      });
	  }
	}
});