import React, { Component } from 'react';

export default class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo:'',
      status: false,
    }
    this.handler = this.handler.bind(this);
  }

  handler(event){
    // console.log(event.target.value)
    console.log(this.state)
    this.setState({todo:event.target.value})
    // this.props.addToDo(event.target.value)
  }
  componentWillMount() {

  }
  onSubmitHandler(event) {
    console.log("HHEH" ,this.state);
    // this.props.addToDo(this.state)

  }

  render() {
    // console.log(this.props.addToDo, "propss");
    return(
      <div >
        <label>
          <input type="text" onChange={this.handler} />
        </label>
        <button onClick={()=>{
          this.props.addToDo(this.state)
        }
      }>submit</button>
      </div>
    )
  }
}
