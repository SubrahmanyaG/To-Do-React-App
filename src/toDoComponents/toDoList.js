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
    let filter = this.props.filter
    let completed = 0
    const todoItems = this.props.todoList.map((todo,index) => {
        if(todo.status) {
          completed++;
        }
        return (
          (filter==='all') ?
            <li onClick={(e)=>this.props.toggleTodo(index)} style={todo.status?done:pending} key={index}>{todo.text}</li>
            :
            (filter==='completed' && todo.status) ?
                  <li onClick={(e)=>this.props.toggleTodo(index)} style={done} key={index}>{todo.text}</li>
                  :
                  (filter==='pending' && !todo.status)?
                        <li onClick={(e)=>this.props.toggleTodo(index)} style={pending} key={index}>{todo.text}</li>
                        :
                        null)
    }
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
           <div style={this.props.filter==='all'?selected:null} onClick={(e)=>this.props.visiblityHandler('all')}><small>ALL</small></div>
           <div style={this.props.filter==='completed'?selected:null} onClick={(e)=>this.props.visiblityHandler('completed')}><small>Completed</small></div>
           <div style={this.props.filter==='pending'?selected:null} onClick={(e)=>this.props.visiblityHandler('pending')}><small>Pending</small></div>
         </div>
         <div>Total: {this.props.todoList.length} Completed: {completed} Pending: {this.props.todoList.length-completed}</div>
      </div>
    )
  }
}
