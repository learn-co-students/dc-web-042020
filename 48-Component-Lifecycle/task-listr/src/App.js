import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

//when the page loads, we make a fetch call, update state
//when the form is submitted, send a POST to add new task,
  //update state of formText = ""
  //update state of

  //taskData = [{},{},{},{}]

//when the X button is clicked => update state in order to update the DOM
//tasksData needs to find the match and remove it form the array

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      tasksData: null //, []
    }
    console.warn("App constructor")
  }

  handleDelete = (taskId) => {
    console.log("attempting to remove tasks", taskId)
    //slice and splice
    //.filter

    // let copy = [...this.state.tasksData]
    // //find the index of the task we're trying to delete
    // let found = copy.find(task => task.id == taskId)
    // let index = copy.indexOf(found)
    // copy.splice(index, 1)
    let newTasks = this.state.tasksData.filter(task => task.id !== taskId)

    this.setState({tasksData: newTasks})

    //fetch
  }

  componentDidMount(){
    console.warn("App componentDidMount")
    //window.addEventListener("resize")
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => {
          //do soemthing with data
          this.setState({tasksData: data})
      })
    //this is where we can this.setState({tasksData: ???})
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
    //autosave???
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      //create a new array, this is an exact copy of the old array
      let newArray = [...this.state.tasksData, newTask]
      this.setState({
        formText : "",
        tasksData : newArray
      })
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
          formText={this.state.formText}
        />
        <TaskList handleDelete={this.handleDelete} tasks={this.state.tasksData}/>
      </div>
    );
  }
}

export default App;
