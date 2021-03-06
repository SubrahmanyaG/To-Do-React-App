import React, { Component } from 'react';

export default class ToDoForm extends Component {
  handleNewTodoKeyDown = (event) => {
			if (event.keyCode !== 13) {
				return;
			}
      this.props.addToDo({todo:event.target.value})
		}

  render() {
    return(
      <div>
        <header>
          <h1>Todos</h1>
          <input
            className="new-todo"
            placeholder="Add To-Do here"
            value={this.props.newTodo}
            onKeyDown={this.handleNewTodoKeyDown}
            autoFocus={true}
          />
        </header>
      </div>
    )
  }
}
