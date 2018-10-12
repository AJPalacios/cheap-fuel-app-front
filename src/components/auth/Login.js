import React,{Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import axios from 'axios'
import toastr from 'toastr'

const login_url = 'http://localhost:3000/login'

class Login extends Component {

  state = {
    auth:{},
    loading: false
  }

  login = (e)=>{
    e.preventDefault()
    this.setState({loading:true})
    const {auth} = this.state
    axios.post(login_url,auth)
    .then(res=>{
      console.log(res)
      toastr.success('Iniciaste sesión correctamente')
      localStorage.setItem('my-fuel-user', JSON.stringify(res.data.user))
      localStorage.setItem('token', res.data.token)
      this.setState({loading:false})
      const profile = this.props.history
      profile.push('/profile')
    })
    .catch(e=>{
      toastr.error('email o contraeña incorrectos')
      this.setState({loading:false})
    })
  }

  onChange = (e)=>{
    const field = e.target.name
    const value = e.target.value
    const {auth} = this.state
    auth[field] = value
    this.setState({auth}) 
  }

  render(){

    const {loading} = this.state

    return(
      
      <div className='App'>
        <header className='App-header'>
          <h1>Iniciar Sesión</h1>
          <Form onSubmit={this.login}>
            <Form.Field>
              <Input
                name='email'
                label= 'Email'
                type='email'
                onChange={this.onChange}
                placeholder='Email'
              />
            </Form.Field>
            <Form.Field>
              <Input
                name='password'
                label= 'Password'
                type='password'
                onChange={this.onChange}
                placeholder='Password'
              />
            </Form.Field>
            <Button loading={loading} className='huge ui button' type='submit'>Inciar Sesión</Button>
          </Form>
        </header>
      </div>

    );
  }



} 

export default Login
