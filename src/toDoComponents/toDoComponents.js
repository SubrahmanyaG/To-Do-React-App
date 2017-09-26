import React, { Component } from 'react';

import ToDoForm from './toDoForm';
import ToDoList from './toDoList'
export default class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          todo: "play",
          status: true,
        },
        {
          todo: "test",
          status: false,
        }
      ],
    }
    this.addToDo = this.addToDo.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.countPending = this.countPending.bind(this);
  }
  addToDo(data) {
    var newArray = this.state.todoList? this.state.todoList.slice(): [];
    data['status'] = false;
    let flag = true;
    newArray.map((item) =>{
      if(item.todo===data.todo){
        flag = false;
        alert("To-Do name must be unique", item.todo, data.todo);
      }
    })
    if(flag && data.todo!==''){newArray.push(data);}
    this.setState({todoList: newArray});
  }

  toggleStatus(index) {
    console.log(index);
    var newArray = this.state.todoList? this.state.todoList.slice(): [];
    newArray[index].status = !newArray[index].status;
    this.setState({todoList: newArray});
  }

  countPending = ()=>{
    let count = 0;
    console.log(count, "COunt")
    this.state.todoList.map((todo)=>{
      if(!todo.status){
        count+=1;
      }
    })
    return count
  }

  render() {
    console.log(this.state.todoList, "HERE")
    return(
      <div className='ToDoComponent'>
        <ToDoForm addToDo={this.addToDo}/>
        <ToDoList todoList={this.state.todoList} toggle={this.toggleStatus}/>
        <div className='Count'>
          <div>Total todos: {this.state.todoList.length}</div>
          <div>pending: {this.countPending()}</div>
        </div>
      </div>
    )
  }
}
