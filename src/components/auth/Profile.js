import React, {Component} from 'react'

import Map from '../Map'
import UserMenu from '../UserMenu'
class Profile extends Component{


  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('my-fuel-user'))
    if(!user) return this.props.history.push('/login')
  }

  render(){
    return(
      <div>
        <Map ></Map>
        <UserMenu></UserMenu>
      </div>
    );
  }

}


export default Profile