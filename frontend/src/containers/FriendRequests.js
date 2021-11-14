import axios from 'axios'
import React, {Component} from 'react'
import FriendRequestItem from '../components/FriendRequestItem'

export default class FriendRequests extends Component {

    state = {
        requests: [],
    }

    componentDidMount(){
        axios.get("http://localhost:3000/api/v1/friendships",{ withCredentials:true})
        .then(res => {
            const filteredRequests = res.data.filter(request => request.user_id !== this.props.user.id)
            console.log(res.data)
            this.setState({requests: filteredRequests})
        })


    }

    render() {

        return(
           <div>
               <header><h1>Friend Requests</h1></header>
               <div>
                   {this.state.requests.map((request) => { return (
                       <FriendRequestItem request={request}/>)
                   })} 
               </div>
           </div>
        )
    }

}
