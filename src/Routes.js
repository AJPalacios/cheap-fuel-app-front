import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import MapComponent from './components/Map'

const Routes = ()=>{
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/map' component={MapComponent}></Route>
    </Switch>
  )
}

export default Routes