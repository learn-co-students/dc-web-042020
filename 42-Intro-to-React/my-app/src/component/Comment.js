import React from 'react' //ANYTHING you create a React component

//create components using Function syntax

//function needs to return some JSX
function Comment(props){
  return <p>"{props.text}" by {props.author}</p>
}

//Goal to render a comment inside our CommentBox
export default Comment
