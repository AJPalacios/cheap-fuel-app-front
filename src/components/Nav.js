import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'


class NavBar extends Component{

  state={}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logOut = (e)=>{
    e.preventDefault()
    localStorage.removeItem('my-fuel-user')
    return this.props.history.push('/login')
    
  }

  render(){
    const { activeItem } = this.state
    return(
      <div>
      <Menu stackable>
        <Menu.Item>
          <img src='https://res.cloudinary.com/procode/image/upload/v1539804125/fuel_zdlrpr.png'/>
        </Menu.Item>
        <Menu.Item
          name='log-out'
          active={activeItem === 'log-out'}
          onClick={this.logOut}
        >
          Cerrar Sesión
        </Menu.Item>
      </Menu>
      </div>
    );
  }

}

export default withRouter(NavBar)