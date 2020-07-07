import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {currentUser: null} //is someone logged in?
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      fetch("http://localhost:3000/api/v1/token", {
        method: "GET",
        headers: {
          "Authentication": localStorage.getItem("jwt")
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.updateUser(data)
      })
    }
    //check if there is token in localStorage
    //if so, make fetch call to find out logged in user
    //then this.setState of currentUser
  }

  updateUser = (user) => {
    this.setState({currentUser: user})
  }

//if the path is /login, show the LoginForm
//if the path is still /login but there IS a currentUser, redirect to the /profile

  render(){
    return (
      <Fragment>
        <Nav currentUser={this.state.currentUser} updateUser={this.updateUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/profile" render={() =>
            this.state.currentUser ? <Profile
              currentUser={this.state.currentUser} />:
              <Redirect to="/login" />
          } />
          <Route exact path="/login" render={() =>
            this.state.currentUser ?
            <Redirect to="/profile"/> :
            <LoginForm updateUser={this.updateUser}/>
          } />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
