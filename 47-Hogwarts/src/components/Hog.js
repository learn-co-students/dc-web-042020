import React from 'react'
import CardFront from './CardFront'

//refactor this function into a class compoonent

class Hog extends React.Component {

  constructor(){
    super()
    this.state = {
      showDetails: false //false means this hog is not showing the details
    }
  }

  //it is going to change state
  //exists here in the same class as the state
  changeDetails = () => {
    //going to change state
    // console.log("changing state")
    this.setState({showDetails: !this.state.showDetails})

    //this.setState( {} )
    //this.setState( (prevState) => { return newState } )
    //this.setState( {}, () => {} )

  }

  render(){
    // console.log("Hog props:", this.props.pig)
    // debugger
    let pigImage = require(`../hog-imgs/${this.props.pig.name.toLowerCase().replace(/ /g,"_")}.jpg`)
    return (
      <div className="ui card" onClick={this.changeDetails}>
        {this.state.showDetails ?
          <div>
            <p>Specialty: {this.props.pig.specialty}</p>
            <p>Greased: {this.props.pig.greased ? "true" : "false"}</p>
            <p>Weight: {this.props.pig.weight}</p>
            <p>Highest Medal Achieved: {this.props.pig["highest medal achieved"]}</p>
          </div>
          :
          <CardFront pig={this.props.pig}/>
        }
      </div>
    )
  }
}

export default Hog
//when click on hog => change the state of showDetails => let React maniulate the DOM
