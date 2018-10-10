import React, { Component } from 'react'

import { Button, Form, Input} from 'semantic-ui-react'

class SignUp extends Component{

  render(){
    return(

      <div className='App'>
      <header className='App-header'>
        <h1>Crear Cuenta</h1>
        <Form>
          <Form.Field>
            <Input 
              label='Username'
              placeholder='@Username'
              type='Text'
            />
          </Form.Field>
          <Form.Field>
            <Input 
              label='Nombre'
              placeholder='user@mail.com'
              type='email'
            />
          </Form.Field>
          <Form.Field>
            <Input 
              label='Password'
              placeholder='*********'
              type='password'
            />
          </Form.Field>
          <Button className='huge ui button' type='submit'>Crear Cuenta</Button>
        </Form>
      </header>
      </div>
    );
  }

}

export default SignUp