import { data } from 'autoprefixer'
import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'




export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            logInErrors: ""
        }
    }
   

    logIn = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        fetch("http://localhost:3000/api/v1/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem("jwt", data.jwt)
            this.props.handleLogin(data.user)
        })
 
        this.setState({
            email: "",
            password: ""
        })
        if(data)
            this.props.history.push("/Dashboard")
            else {
                this.props.history.push("/")
            }
    }

    // 

      handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

     render() {


        return(

            <Form onSubmit={this.logIn}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"
                                  name="email" value={this.state.email}  
                                  onChange={this.handleChange} required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                                  name="password" value={this.state.password} 
                                  onChange={this.handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        )
     }
}

