import React, {Component} from 'react';
import '../App.css';
import CommentBox from './CommentBox'

class App extends Component {

  render(){
    let day = "Monday"
    return (
      <div className="App">
        <header className="App-header">
          <p> Welcome to our first app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <CommentBox />
        </header>
      </div>
    );
  }

}

export default App;

//import '../' => go to parent folder
//import './' => go to the current folder

/*
App < Component
super()
*/
