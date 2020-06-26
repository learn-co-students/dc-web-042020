import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super(props)//how to initialize state based on initial props
    this.state = {
      color: "black"
    }
    console.warn(`Task ${this.props.task.id} constructor`)
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount`)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount`)
  }

  changeColor = () => {
    this.setState({color: "red"})
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    return(
      <div>
        <b onClick={this.changeColor} style={{color: this.state.color}} >
          {this.props.task.text}
        </b>
        <button onClick={() => {this.props.handleDelete(this.props.task.id)}}>x</button>
      </div>
    )
  }
}

export default Task
