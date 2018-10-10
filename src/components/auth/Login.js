import React,{Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'

class Login extends Component {

  render(){
    return(

      <div className='App'>
        <header className='App-header'>
          <h1>Iniciar Sesión</h1>
          <Form>
            <Form.Field>
              <Input
                label= 'Email'
                type='email'
              />
            </Form.Field>
            <Form.Field>
              <Input
                label= 'Password'
                type='password'
              />
            </Form.Field>
            <Button className='huge ui button' type='submit'>Inciar Sesión</Button>
          </Form>
        </header>
      </div>

    );
  }



} 

export default Login
