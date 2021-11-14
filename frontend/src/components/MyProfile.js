import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import axios from 'axios'

export default class MyProfile extends Component {
    
    state = {
        photos:[]
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/v1/gallery_posts`, {withCredentials:true})
        .then(photos => {
            const filteredPhotos = photos.data.filter(photo => photo.user_id === this.props.user.id)
            // console.log(photos.data)
            this.setState({
                photos:filteredPhotos
            })
        })
    }
     

    render() {
        const {username, headline,favoriteRole, bio} = this.props.user

        return(
            <div className="profile">
                <div className="profile2">
                    <h1>{username}</h1>
                    <h3>{headline}</h3>
                    <h3>{favoriteRole}</h3>
                    <p>{bio}</p>
                    <div className="image">
                      {this.state.photos.map((photo) =>   (<Image src={photo.photo} width="500px"/>))}
                    </div>
                </div>
            </div>
        )
    }
}

