import React, {Component} from 'react' 
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'


export default class EditProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username:"",
            headline: "",
            favoriteRole: "",
            bio: "",
            photo: null,
            registrationErrors: ""
        }
    }
   

    editProfile = (e) => {
        e.preventDefault()
        const {username, headline, favoriteRole, bio} = this.state
        const {id} = this.props.user
        const formData = new FormData();
        formData.append('username', username)
        formData.append('headline', headline)
        formData.append('favoriteRole', favoriteRole)
        formData.append('bio', bio)
        // formData.append('photo', e.target.photo.files[0])

        axios.patch(`http://localhost:3000/api/v1/users/${id}`, formData,
        {withCredentials: true})
        .then(res => {
            console.log(res)
            if (res.data.status === 'created'){
                this.props.handleAuth(res.data.user)
        }})
        .catch (error => console.log(error))
        
        this.props.history.push("/Dashboard")
    }
   
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    photoSelectedHandler = (e) => {
        console.log(e.target.files[0])
        this.setState({
            photo: e.target.files[0]
        })
    }

    render() {

        return(
            <div>
                <Form onSubmit={this.editProfile} encType="multipart/form-data" >
                <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" 
                                      placeholder="Username"
                                      name="username"
                                      value={this.state.username}
                                      onChange={this.handleChange} />
                    </Form.Group>
                <Form.Group>
                        <Form.Label>Headline</Form.Label>
                        <Form.Control type="text" 
                                      placeholder="Headline"
                                      name="headline"
                                      value={this.state.headline}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Favorite Role</Form.Label>
                        <Form.Control as="select" name="favoriteRole" value={this.state.favoriteRole} 
                                                                      onChange={this.handleChange}>
                        <option>Bounty Hunter</option>
                        <option>Collector</option>
                        <option>Moonshiner</option>
                        <option>Naturalist</option>
                        <option>Trader</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea"  
                                      name="bio"
                                      value={this.state.bio} 
                                      onChange={this.handleChange} rows={5} />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.File name="photo" type="file" onChange={this.photoSelectedHandler} label="Upload Photo" accept="image/*"/>
                    </Form.Group> */}
                <Button variant="primary" type="submit">
                    Create Profile 
                </Button>
            </Form>
            </div>
        )
    }
}
