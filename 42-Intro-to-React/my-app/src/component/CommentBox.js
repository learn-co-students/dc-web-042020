//where we create a new component
import React from 'react'
import Comment from './Comment'

//create a class component
//MUST have a render method
class CommentBox extends React.Component {

  //render MUST return some JSX
  render(){
    return <div className="box">
      <Comment text="At least it's Friday..." author="Paul"/>
      <Comment text="I love dogs" author="Ann"/>
    </div>
  }

}

//use CommentBox inside of our App
export default CommentBox
