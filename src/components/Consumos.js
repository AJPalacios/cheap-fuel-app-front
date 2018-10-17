import React from 'react'
import NavBar from './Nav'

class Consumo extends React.Component{

  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('my-fuel-user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
  }

  render(){
    return(
      <div>
        <NavBar/>
        <h1>Componente para consumos</h1>
      </div>
    );
  }

}

export default Consumo