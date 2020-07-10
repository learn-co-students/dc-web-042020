import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  increment = (num) => {
    //dispatch an action
    this.props.dispatch( {type: "INCREMENT_COUNTER", number: num} )
  };

  decrement = (num) => {
    this.props.dispatch( {type: "DECREMENT_COUNTER", number: num} )
  };

  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.countValue}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //prop: state.???
    countValue: state.count,
    name: "paul"
  }
}

// const withCount = connect(mapStateToProps)
// const EnhancedCounter = withCount(Counter)

export default connect(mapStateToProps)(Counter)









//
