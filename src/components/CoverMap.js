import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

import NavBar from './Nav'

mapboxgl.accessToken = "pk.eyJ1IjoiYWRuY29kZSIsImEiOiJjam16bHJiYzEwMjI5M3Btemh5d2N3NHkyIn0.eqcpU52HvvJ8YxgGz55dpA"

class CoverMap extends Component{

  componentWillMount(){
    this.drawMap()
  }
  
  drawMap(){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{

        

        let map = new mapboxgl.Map({
          container: 'cover-map',
          zoom:15,
          center: [pos.coords.longitude,pos.coords.latitude],
          style: 'mapbox://styles/adncode/cjncpkpde0iz12spfccj3m5aj'
        })

        var marker = new mapboxgl.Marker()
	      .setLngLat([pos.coords.longitude,pos.coords.latitude])
        .addTo(map)
      
      },(msg)=>{alert('Please enable your gps position')},{maximumAge:600000, timeout:5000,enableHighAccuracy: true})
    }
  }
  

  render(){
    return(
        <div>
          <div className='Map' id="cover-map"></div>
        </div>
    );
  }
}

export default CoverMap