import React, {Component} from 'react'


class Home extends Component{

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Este es mi cover page de inicio</h1>
          <a href='/login' className='ui green button'>Iniciar Sesión</a>
          <a href='/signup' className='ui blue button'>Crear Cuenta</a>
        </header>
      </div>
    );
  }

}

export default Home