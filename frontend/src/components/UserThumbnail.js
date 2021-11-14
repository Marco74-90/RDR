import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export default class UserThumbnail extends Component {
    

    render() {
        const {username} = this.props.user

        return(
           <div>
               <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{username}</Card.Title>
                            <Link to={{
                                pathname:"/UserProfile",
                                state: this.props.user}}><Button variant="primary">Visit Profile</Button></Link>
                        </Card.Body>
                    </Card>
           </div>
        )
    }

}