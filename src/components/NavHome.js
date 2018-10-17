import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import { runInThisContext } from 'vm';

class NavHome extends Component{

  state={}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render(){
    const { activeItem } = this.state
    return(
      <div>
        
          
      <Menu stackable>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png'/>
        </Menu.Item>
        <Menu.Item
          name='iniciar sesión'
          active={activeItem === 'iniciar sesión'}
          onClick={this.handleItemClick}
        >
          <NavLink  to='/login'>Iniciar Sesión</NavLink>
        </Menu.Item>
        <Menu.Item
          name='crear cuenta'
          active={activeItem === 'crear cuenta'}
        >
          <NavLink to='/signup'>Crear Cuenta</NavLink>
        </Menu.Item>
      </Menu>
      </div>
    );
  }

}

export default NavHome