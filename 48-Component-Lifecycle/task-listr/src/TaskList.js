import React, {PureComponent, Component} from 'react'
import Task from './Task'

class TaskList extends PureComponent{
  render(){
    return(
      this.props.tasks ? this.props.tasks.map(task => <Task
        key={task.id}
        task={task}
        handleDelete={this.props.handleDelete}
      />) : null
    )
  }
}

export default TaskList
