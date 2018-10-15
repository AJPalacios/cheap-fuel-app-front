import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

import NavBar from './Nav'

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js'

mapboxgl.accessToken = "pk.eyJ1IjoiYWRuY29kZSIsImEiOiJjam16bHJiYzEwMjI5M3Btemh5d2N3NHkyIn0.eqcpU52HvvJ8YxgGz55dpA"

class MapComponent extends Component{

  
  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('my-fuel-user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
    this.drawMap()
  }

  drawMap(){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{

        let map = new mapboxgl.Map({
          container: 'map',
          zoom:15,
          center: [pos.coords.longitude,pos.coords.latitude],
          style: 'mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs'
        })

        var marker = new mapboxgl.Marker()
	      .setLngLat([pos.coords.longitude,pos.coords.latitude])
	      .addTo(map)




      map.addControl(new mapboxgl.NavigationControl())
      map.addControl(new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),'top-left')
      
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

      map.on('mouseenter','gas-layer',(e)=>{
        let features = map.queryRenderedFeatures(e.point,{
          layers: ['gas-layer']
        })

        var feature = features[0]
        console.log(feature.properties.address_street)

        map.getCanvas().style.cursor = 'pointer'
        var coordinates = feature.geometry.coordinates.slice()
        var description = feature.properties.name
        var address = feature.properties.address_street

        

        console.log(coordinates, description)

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        let template = `<h3>${description}</h3> <br>
                        <p>${address}</p><br>`

        popup.setLngLat(coordinates)
            .setHTML(template)
            .addTo(map);

      })
      map.on('mouseleave', 'gas-layer', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });

   /* map.on('click', (e)=>{
    
      let features = map.queryRenderedFeatures(e.point,{
        layers: ['gas-layer']
      })
    
      
    var feature = features[0]
    
    var popup = new mapboxgl.Popup({offset: [0,-15]})
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.name + '</h1><p>'+feature.properties.address_street+'</p>')
      .setLngLat(feature.geometry.coordinates)
      .addTo(map)
    })*/

      // fin del current position 
      },(msg)=>{alert('Please enable your gps position')},{maximumAge:600000, timeout:5000,enableHighAccuracy: true})
    }
  }
  

  render(){
    return(
        <div>
          <NavBar/>
          <div className='Map' id="map"></div>
        </div>
    );
  }
}

export default MapComponent