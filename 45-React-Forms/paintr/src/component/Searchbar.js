import React from 'react'

//functional component
const Searchbar = (props) => {
  console.log("Inside Searchbar, what are props?", props.handleChange)
  return (
    <div className="ui input">
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Searchbar
