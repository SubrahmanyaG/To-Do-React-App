import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor() {
    super()
    // this.callToggle = this.callToggle.bind(this);
  }
  // callToggle = (event, index) => {
  //   console.log(event, index);
  //   // this.props.toggle(index);
  // }

  render() {
    const done = {
      color: 'green',
      textDecorationLine: 'line-through',
    };
    const pending = {
      color: 'red',
    };


    const todoItems = this.props.todoList.map((todo,index) =>
        <li onClick={(e)=>this.props.toggle(index)} style={todo.status?done:pending} key={index}>
          {todo.todo}
        </li>
      );
    return (
      <div className='ToDoList'>
        {todoItems}
       </div>
    )
  }
}
