import React, {Component} from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
 import axios from 'axios'
import Home from'./containers/Home'
import Dashboard from './containers/Dashboard'
import FriendRequests from './containers/FriendRequests'
import PhotoAlbum from './containers/PhotoAlbum'
import MyProfile from './components/MyProfile'
import UserProfile from './components/UserProfile'
import EditProfile from './forms/EditProfile'
import BrowseUsers from './containers/BrowseUsers'
import './style.css'

export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: "Not_Logged_In.",
      user:{}
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
  }


  // componentDidMount() {
  //   this.autoLogin()
  // }

  // autoLogin(){

  //   const token = localStorage.getItem("token")

  //   if(token){
  //     fetch("http://localhost:3000/api/v1/auto_login",{

  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => this.setState({user:data}))
  //   }

  // }

 
  handleLogin(data) {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data
    })
  }

  handleLogout() {
    axios.delete("http://localhost:3000/api/v1/logout",
        {withCredentials: true}
        ).then(this.setState({
          loggedInStatus: "Not_Logged_In",
          user: {}
       }))
   .then(<Redirect to="/Home"/>)

   
  }

  handleAuth = ()  => {
  const token = localStorage.getItem("token")
  fetch("http://localhost:3000/user_is_authed", {
    headers: {
      "Authorization": `Bearer${token}`
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
  
 } 

 


  render() {

    return(
        <div className="App">
          <Switch>
            <Route exact path='/' render={props =>(<Home {...props} 
                                                          handleLogin={this.handleLogin} 
                                                          loggedInStatus={this.state.loggedInStatus}
                                                          handleAuth={this.handleAuth}/>)} />
            <Route exact path="/Dashboard" render={props => (<Dashboard {...props}
                                                                        loggedInStatus={this.state.loggedInStatus} 
                                                                        logout={this.handleLogout} 
                                                                        user={this.state.user}/>)} />
            <Route exact path="/PhotoAlbum" render={props =>(<PhotoAlbum {...props} 
                                                                        user={this.state.user}
                                                                        handleAuth={this.handleAuth}/>)}/>
            <Route exact path="/EditProfile" render={props => (<EditProfile {...props} 
                                                                            user={this.state.user}/>)} />
            <Route exact path="/FriendRequests" render={props => (<FriendRequests {...props} 
                                                                                  user={this.state.user}/>)}/>
            <Route exact path="/MyProfile" render={props => (<MyProfile {...props} 
                                                                        user={this.state.user}/>)}/>
            <Route exact path="/UserProfile" render={props => (<UserProfile {...props}
                                                                            user={this.state.user}/>)} /> 
            <Route exact path="/BrowseUsers" render={props => (<BrowseUsers {...props} 
                                                                            user={this.state.user}/>)}/>
          </Switch>
        </div>
    )
  }
}




// checkLogInStatus() {
//   axios.get("http://localhost:3000/api/v1/auto_login",{withCredentials:true})
//   .then(res => {
//     if(res.data.logged_in && this.state.loggedInStatus === "Not_Logged_In")
//       this.setState({
//         loggedInStatus: "Logged_In",
//         user: res.data.user
//       })
//     else if (!res.data.logged_in && this.setState.loggedInStatus === "Logged_In")
//     this.setState({
//       loggedInStatus: "Not_Logged_In",
//       user:{}
//     })
//   })
//   .catch(error => {console.log(error)})
  
// }
 