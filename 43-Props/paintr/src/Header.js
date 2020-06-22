//component using the class syntax
import React, {Component} from 'react'

//this.props
class Header extends Component {
  render(){
    // console.log(this.props)
    // debugger
    return (
      <div className={`ui ${this.props.color} inverted item menu`}>
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">Painter</div>
          <div className="sub header">{this.props.name}</div>
        </h2>
      </div>
    )
  }
}

export default Header
