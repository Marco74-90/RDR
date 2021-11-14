import axios from 'axios'
import React, {Component} from 'react'
import {Image} from 'react-bootstrap'


export default class UserProfile extends Component {

    state = {
        photos:[]
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/v1/gallery_posts`, {withCredentials:true})
        .then(photos => {
            const filteredPhotos = photos.data.filter(photo => photo.user_id === this.props.location.state.id)
            console.log(photos.data)
            this.setState({
                photos:filteredPhotos
            })
        })
    }

    
    addFriendRequest() {
        axios.post("http://localhost:3000/api/v1/friendships", {
            user_id: this.props.user.id,
            friend_id: this.props.location.state.id,
            status: "pending"
        },
        {withCredentials:true}
        ).then(res => {console.log(res)})
    }

        

    render() {
        const {username, headline,favoriteRole, bio} = this.props.location.state
        console.log(this.props.user)

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
                {/* <button onClick={() => {this.addFriendRequest()}}>Add Friend</button>  */}
            </div>
        )
    }

}

