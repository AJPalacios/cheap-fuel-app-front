import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

import {saveMoneyPremium, saveMoneyMagna} from '../services/userService'

class UserMenu extends Component{

  state = {
    gasolineras:[]
  }



  


  render(){
    return(       
        <div>
        <section className='Footer ui grid '>
          <div className='sixteen wide column ui center aligned'>
          <Button.Group size='large'>
            <Button positive onClick={saveMoneyMagna}>Magna</Button>
            <Button.Or />
            <Button negative onClick={saveMoneyPremium}>Premium</Button>
          </Button.Group>
          </div> 
        </section>
      </div>
    );
  }

}

export default UserMenu