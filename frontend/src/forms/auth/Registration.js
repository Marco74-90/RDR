import React, {Component} from 'react' 
import { Form, Button } from 'react-bootstrap'


export default class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
    }
   

    register = (e) => {
        e.preventDefault()
        const {email, password, password_confirmation} = this.state
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            })
        })
        .then(res => res.json())
        .then( data => { 
            localStorage.setItem("jwt", data.token)
            this.props.handleLogin(data.user)
            this.props.history.push("/Dashboard")
        })

            this.setState({
            email: "",
            password: "",
            password_confirmation: ""
        })
        
    }
   
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        return(
            <div>
                <Form onSubmit={this.register} encType="multipart/form-data" >
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="email" placeholder="Enter email" 
                                  value={this.state.email} 
                                  onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>  Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" 
                                  value={this.state.password} 
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>  Password Confirmation</Form.Label>
                    <Form.Control type="password" name="password_confirmation" placeholder="Password Confirmation" 
                                  value={this.state.password_confirmation} 
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            </div>
        )
    }
}


// register = (e) => {
//     e.preventDefault()
//     const {email, password, password_confirmation, username, headline, favoriteRole, bio} = this.state
//     axios.post("http://localhost:3000/user", {
//         user: {
//             email: email,
//             password: password,
//             password_confirmation: password_confirmation,
//             username: username,
//             headline: headline,
//             favoriteRole: favoriteRole,
//             bio: bio 
//         }
//     },
//     {withCredentials: true}
//     ).then(res => {
//         if (res.data.status === 'created'){
//             this.props.handleAuth(res.data)
//     }})
//     .catch (error => console.log(error))
    
//}



// fetch("http://localhost:3000/api/v1/registrations", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         email: email,
//         password: password,
//         password_confirmation: password_confirmation,
//         username: username, 
//         headline: headline,
//         favoriteRole: favoriteRole,
//         bio: bio,
//     })
// })
// .then(res => res.json())
// .then( data => { 
//     localStorage.token = data.token
//     this.props.handleLogin(data.user)
//     this.props.history.push("/Dashboard")
// })

// this.setState({
//     email: "",
//     password: "",
//     password_confirmation: "",
//     username:"",
//     headline: "",
//     favoriteRole: "",
//     bio: "",
// })



// user: {
//     email: email,
//     password: password,
//     password_confirmation: password_confirmation,
//     username: username,
//     headline: headline,
//     favoriteRole: favoriteRole,
//     bio: bio 
//     }


// register = (e) => {
//     e.preventDefault()
//     const {email, password, password_confirmation} = this.state
//     const formData = new FormData();
//     formData.append('email', email)
//     formData.append('password', password)
//     formData.append('password_confirmation', password_confirmation)

//     axios.post("http://localhost:3000/api/v1/registrations", formData,
//     {withCredentials: true})
//     .then(res => {
//         console.log(res)
//         if (res.data.status === 'created'){
//             this.props.handleAuth(res.data.user)
//     }})
//     .catch (error => console.log(error))
    
//     this.props.history.push("/Dashboard")
// }