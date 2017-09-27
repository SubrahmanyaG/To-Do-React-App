import React, { Component } from 'react';

import ToDoForm from './toDoForm';
import ToDoList from './toDoList'
export default class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      statusFilter: 'all'
    }
  }

  handleAddTodo = (value) => {
    let todoObj = {
      text: value,
      status: false
    }
    let todoList = [...this.state.todoList, todoObj]
    this.setState({todoList: todoList})
  }

  toggleTodo = (index) => {
    let ToDoList = [...this.state.todoList]
    ToDoList[index]['status'] = !ToDoList[index]['status']
    this.setState({todoList: ToDoList})
  }

  visiblityHandler = (filterType) => {
    this.setState({statusFilter:filterType})
  }

  render() {
    console.log(this.state)
    return(
      <div className='ToDoComponent'>
        <ToDoForm className="form-inline" addToDo={this.handleAddTodo}/>
        <ToDoList todoList={this.state.todoList} toggleTodo={this.toggleTodo}
          filter={this.state.statusFilter} visiblityHandler={this.visiblityHandler}/>
      </div>
    )
  }
}
