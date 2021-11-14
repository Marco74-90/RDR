
import axios from 'axios'
import React, {Component} from 'react'
import { Card, Button } from 'react-bootstrap'

export default class FriendRequestItem extends Component {

    state = {
        user: {},
        request: this.props.request
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/v1/users/${this.props.request.user_id}`,{ withCredentials:true})
        .then(res => {
            console.log(res.data)
            this.setState({user: res.data})
        })

    }

    handleAccept() {
        axios.patch(`http://localhost:3000/api/v1/friendship/${this.props.request.id}`,{
            method: "PATCH",
            status: "accepted"

        },
        {withCredentials:true}
        ) //Get Friends

    }
                        // receiver_id then requestor_id second 
    handleDecline() {
        axios.delete(`http://localhost:3000/api/v1/friendships/${this.props.request.id}`, {
            method: "DELETE",
        },
        {withCredentials:true}
        ).then(res => res.json())

    }

    render() {
        

        return(
           <div>
               <div>
               <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.state.user.username}</Card.Title>
                            <Button  onClick={this.handleAccept()}variant="primary">Accept</Button>
                            <Button  oncClick={this.handleDecline()}variant="primary">Decline</Button>
                        </Card.Body>
                    </Card>
               </div>
           </div>
        )
    }

}