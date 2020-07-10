import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{color: this.props.color}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React {this.props.name}</h1>
        <h3>{`The current count is less than ${this.props.countValue + 5 - (this.props.countValue % 5)}`}</h3>
      </header>
    );
  }
}

//Problem: we want to trick a component into think its has
//map the state in the store to some props
const mapStateToProps = (state) => ({countValue: state.count})

// const withCount = connect(mapStateToProps) //returns a function
// const EnhancedHeader = withCount(Header) //returns a components
// export default EnhancedHeader
export default connect(mapStateToProps)(Header)
