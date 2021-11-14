import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {

    render() {

        return(
            <ul className="side-nav">
                <Link to="/EditProfile"><li><button>Edit Profile</button></li></Link>
                <Link to="/Friends"><li><button>Friends</button></li></Link>
                <Link to="/PhotoAlbum"><li><button>Photo Album</button></li></Link>
                {/* <Link to="/Map"><li><button>Map</button></li></Link> */}
            </ul>
        )
    }

}