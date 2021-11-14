import React, {Component} from 'react'
import Login from '../forms/auth/Login'
import Registration from '../forms/auth/Registration'

export default class Home extends Component {

    render() {

        return(
            <div>
                <div className="header">
                 <header><h1>RDR Buddies</h1></header>
                </div>
                <div className="home">
                <div className="login"> 
                    <h1>Login</h1>
                    <h1>Status: {this.props.loggedInStatus}</h1>
                    <Login {...this.props} handleLogin={this.props.handleLogin} 
                            handleAuth={this.props.handleAuth}/> 
                </div>
                <div className="registration">
                    <h1>Registration</h1>
                    <Registration {...this.props} handleLogin={this.props.handleLogin} 
                                  handleAuth={this.props.handleAuth}/>
                </div>
                </div>
            </div>
        )
    }
}



