import React, {Component} from 'react'
//import Sidenav from '../components/SideNav'
import Navbar from '../components/Navbar'
//import MyProfile from '../components/MyProfile'




export default class Dashboard extends Component {

   

    render() {

        return (
            <div >
                <Navbar logout={this.props.logout}/>
                 <div className="dashboard">
                    {/* <div style={{flex: 1}} className="sideNav">
                        <Sidenav/>
                    </div>
                     <div style={{flex: 1}} className="myProfile" >
                        <MyProfile user={this.props.user}/>
                    </div>  */}
                </div>  
            </div>
        )
    }
}
