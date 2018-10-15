import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class UserMenu extends Component{

  render(){
    return(
      
      <section className='User-actions'>

        <Button.Group widths='3'>
          <Button>Trazar Ruta</Button>
          <Button>Registrar Consumo</Button>
          <Button>Boton Ahorrador</Button>
        </Button.Group>

      </section>
    );
  }

}

export default UserMenu