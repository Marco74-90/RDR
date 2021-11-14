import React, {Component} from  'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {

        return(
                <ul className="navbar">
                    <Link to="/BrowseUsers"><li><button>Browse Users</button></li></Link>
                    <Link to="/MyProfile"><li><button>Profile</button></li></Link>
                    <Link to="/EditProfile"><li><button>Edit Profile</button></li></Link>
                    <Link to="/PhotoAlbum"><li><button>Photo Album</button></li></Link>
                    {/* <Link to="/Friends"><li><button>Friends</button></li></Link> */}
                    <Link to="/FriendRequests"><li><button>Friend Requests</button></li></Link>
                    <Link to="/Dashboard"><li><button>Dashboard</button></li></Link>
                    <Link to="/"><li><button>Home</button></li></Link>
                    <button onClick={() => this.props.logout()}>logout</button>
                </ul> 
        )
    }
}

