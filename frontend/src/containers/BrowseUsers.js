import React, {Component} from 'react'
import UserThumbnail from '../components/UserThumbnail'
import axios from 'axios'

export default class BrowseUsers extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/v1/users", {withCredentials:true})
        .then(users => {
            const filteredUsers = users.data.filter(user => user.id !== this.props.user.id)
            console.log(users.data)
            this.setState({
                users: filteredUsers
            })
        })
    }

    render() {

        console.log(this.props.user.id)


        return(
            <div>
                <div>
                    <header><h1>Users</h1></header>
                </div>
                <div className="userThumbnail">
                    {this.state.users.map((user) => <UserThumbnail key={user.id} user={user}/>)}
                </div>
           </div>
        )
    }

}


