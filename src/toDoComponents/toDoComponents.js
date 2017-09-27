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
      newToDo:'',
      visiblity:'ALL'
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

  visiblityHandler = (type) =>{
    this.setState({visiblity:type})
  }

  toggleStatus(index, selectedtodo) {
    var newArray = this.state.todoList? this.state.todoList.slice(): [];
    // newArray[index].status = !newArray[index].status;
    newArray.map((todo)=>{
      if(todo.todo===selectedtodo){
        todo.status=!todo.status;
      }
    })
    this.setState({todoList: newArray});
  }

  countPending = ()=>{
    let count = 0;
    this.state.todoList.map((todo)=>{
      if(!todo.status){
        count+=1;
      }
    })
    return count
  }

  render() {
    let todos=[];
    if(this.state.visiblity==='ALL'){
      this.state.todoList.map((todo)=>{
        todos.push(todo);
      })
    }
    if(this.state.visiblity==='Completed'){
      this.state.todoList.map((todo)=>{
        if(todo.status){
          todos.push(todo);
        }
      })
    }
    if(this.state.visiblity==='Pending'){
      this.state.todoList.map((todo)=>{
        if(!todo.status){
          todos.push(todo);
        }
      })
    }
    return(
      <div className='ToDoComponent'>
        <ToDoForm className="form-inline" newToDo={this.state.newToDo} addToDo={this.addToDo}/>
        <ToDoList visiblityType={this.state.visiblity} todoList={todos} toggle={this.toggleStatus} visiblityHandler={this.visiblityHandler}/>
        <div className='Count'>
          <div><h5>Total Todos: </h5>{this.state.todoList.length}</div>
          <div><h5>Pending Todos: </h5>{this.countPending()}</div>
        </div>
      </div>
    )
  }
}
