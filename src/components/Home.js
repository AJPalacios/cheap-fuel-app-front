import React, {Component} from 'react'
import CoverMap from './CoverMap'
import NavHome from './NavHome'
import Footer from './Footer'

class Home extends Component{

  render(){
    return(
      <div className="">
        <header className="">
          <NavHome></NavHome>
          <CoverMap></CoverMap>
          <Footer></Footer>
        </header>
      </div>
    );
  }

}

export default Home