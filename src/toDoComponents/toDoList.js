import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const done = {
      color: 'green',
      textDecorationLine: 'line-through',
    };
    const pending = {
      color: 'red',
    };

    const todoItems = this.props.todoList.map((todo,index) =>
        <li  onClick={(e)=>this.props.toggle(index,todo.todo)} style={todo.status?done:pending} key={index}>
          {todo.todo}
        </li>
      );
      const selected = {
        color: 'blue',
      }
    return (
      <div>
        <div className='ToDoList'>
          {todoItems}
         </div>
         <br/>
         <div className="visiblity">
           <div><small>Show: </small></div>
           <div style={this.props.visiblityType==='ALL'?selected:null} onClick={(e)=>this.props.visiblityHandler('ALL')}><small>ALL</small></div>
           <div style={this.props.visiblityType==='Completed'?selected:null} onClick={(e)=>this.props.visiblityHandler('Completed')}><small>Completed</small></div>
           <div style={this.props.visiblityType==='Pending'?selected:null} onClick={(e)=>this.props.visiblityHandler('Pending')}><small>Pending</small></div>
         </div>
      </div>
    )
  }
}
