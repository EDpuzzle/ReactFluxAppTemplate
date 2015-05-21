'use strict';

var MyFirstStore         = require('../stores/MyFirstStore');
var MyFirstActionCreator = require('../actions/MyFirstActionCreator');
var React                = require('react');

module.exports = React.createClass({
	mixins: [MyFirstStore.mixin],

	// getInitialState should be used to setup any component state that does not live in stores.
	getInitialState: function () {
		return {newTodoText: ''};
	},
	getStateFromStores: function () {
		return {
			todos: MyFirstStore.getTodos()
		};
	},
	handleAddClick: function () {
    MyFirstActionCreator.createTodo(this.state.newTodoText);
    this.setState({
    	newTodoText: ''
    });
	},
	handleTodoToggleClick: function (id) {
    MyFirstActionCreator.toggleTodo(id);
	},
	handleTodoRemoveClick: function (id) {
    MyFirstActionCreator.removeTodo(id);
	},
	renderTodoItems: function () {
    var self = this;

    return this.state.todos.map(function (todo) {
      var id = todo.get('id');
      var toggleFn = self.handleTodoToggleClick.bind(self, id);
      var removeFn = self.handleTodoRemoveClick.bind(self, id);
      var style = {textDecoration: todo.get('done') ? 'line-through' : ''};

      return (
        <div key={id}>
          <span style={style}>
            {todo.get('description')}
          </span>
          <input type='button' value='remove' onClick={removeFn}/>
          <input type='button' value='toggle' onClick={toggleFn}/>
        </div>
      );
    });
	},
	updateTodoText: function (event) {
    this.setState({ newTodoText: event.target.value });
	},
	render: function () {
    return (
      <div>
        {this.renderTodoItems()}
        <input type='text' value={this.state.newTodoText} onChange={this.updateTodoText}/>
        <input type='button' value='add' onClick={this.handleAddClick}/>
      </div>
    );
	}
});
