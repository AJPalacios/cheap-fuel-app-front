import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

const MapboxDirections = require('@mapbox/mapbox-gl-directions')

mapboxgl.accessToken = "pk.eyJ1IjoiYWRuY29kZSIsImEiOiJjam16bHJiYzEwMjI5M3Btemh5d2N3NHkyIn0.eqcpU52HvvJ8YxgGz55dpA"

class MapComponent extends Component{

  componentWillMount(){
    this.drawMap()
  }

  drawMap(){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{

        let map = new mapboxgl.Map({
          container: 'map',
          zoom:15,
          center: [pos.coords.longitude,pos.coords.latitude],
          style: 'mapbox://styles/adncode/cjn3sh9sm18ep2sp8bq8uzum3'
        })

        var marker = new mapboxgl.Marker()
	      .setLngLat([pos.coords.longitude,pos.coords.longitude])
	      .addTo(map)




      map.addControl(new mapboxgl.NavigationControl())
      map.addControl(new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),'top-left')
	
    map.on('click', (e)=>{
    
      let features = map.queryRenderedFeatures(e.point,{
        layers: ['gas layer']
      })
    
      
    var feature = features[0]
    
    var popup = new mapboxgl.Popup({offset: [0,-15]})
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.name + '</h1><p>'+feature.properties.address_street+'</p>')
      .setLngLat(feature.geometry.coordinates)
      .addTo(map)
    })

      // fin del current position 
      })
    }
  }
  

  render(){
    return(
        <div>
          <div className='Map' id="map"></div>
        </div>
    );
  }
}

export default MapComponent