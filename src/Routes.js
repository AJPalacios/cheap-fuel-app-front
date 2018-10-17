import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import Profile from './components/auth/Profile'
import Consumos from './components/Consumos'
const Routes = ()=>{
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/mis-consumos' component={Consumos}></Route>
    </Switch>
  )
}

export default Routes