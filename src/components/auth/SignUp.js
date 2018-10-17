import React, { Component } from 'react'

import { Button, Form, Input} from 'semantic-ui-react'

import axios from 'axios'
import toastr from 'toastr'


class SignUp extends Component{

  

  state = {
    signup:{
      username:'new username',
      name:'your name',
      email:'your email',
      password:'your password',
      password2:'confirm password'
    },
    loading: false
  }

  onChange = (e)=>{
    const field = e.target.name
    const value = e.target.value
    const {signup} = this.state
    signup[field] = value
    this.setState({signup})
  }

  createUser = (e)=>{

    const url = 'https://final-project3.herokuapp.com/auth/signup'

    e.preventDefault()
    const {signup} = this.state
    if(signup.password !== signup.password2){
      return toastr.error('Las contraseñas no coinciden')
    }
    
    axios.post(url, signup)
    .then(user=>{
      console.log(user)
      toastr.success('Registrado correctamente')
      const profile = this.props.history
      profile.push('/')
    })
    .catch(e=>{
      console.log(e)
      toastr.error('Error al registrarte')
    })


  }

  render(){
    const {signup ,loading} = this.state
    return(

      <div className='App'>
      <header className='App-header'>
        <h1>Crear Cuenta</h1>
        <Form onSubmit={this.createUser}>
          <Form.Field>
            <Input 
              name='username'
              label='Username'
              placeholder='@Username'
              type='Text'
              onChange={this.onChange}
              value={signup.username}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name='name'
              label='Nombre'
              placeholder='john'
              type='Text'
              onChange={this.onChange}
              value={signup.name}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name='email' 
              label='Email'
              placeholder='user@mail.com'
              type='email'
              onChange={this.onChange}
              value={signup.email}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name='password' 
              label='Password'
              placeholder='*********'
              type='password'
              onChange={this.onChange}
              value={signup.password}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name='password2' 
              label='Confirma tu password'
              placeholder='*********'
              type='password'
              onChange={this.onChange}
              value={signup.password2}
            />
          </Form.Field>
          <Button loading={loading} className='huge ui button' type='submit'>Crear Cuenta</Button>
        </Form>
      </header>
      </div>
    );
  }

}

export default SignUp