import axios from 'axios'

import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js'




export const  saveMoneyPremium = ()=>{
  
  console.log("click!!!!!!!")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos)=>{

      var longitude = pos.coords.longitude
      var latitude = pos.coords.latitude
      console.log(latitude)
      const url = 'https://final-project3.herokuapp.com/near-stations/stations/premium/'
      
      return axios.get(url,{
        params:{
          longitude:longitude,
          latitude:latitude
        }
      })
      .then(data=>{

          console.log(JSON.parse(JSON.stringify(data.data)))

          console.log(data.data[0].geometry.coordinates[0])

          document.getElementById('map') 

          let map = new mapboxgl.Map({
            container: 'map',
            zoom:18,
            center: [longitude,latitude],
            style: 'mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs'
          })

          map.addControl(new mapboxgl.NavigationControl())
          map.addControl(new MapboxDirections({
            accessToken: mapboxgl.accessToken
          }),'top-left')

          map.flyTo({
            center: [
              data.data[0].geometry.coordinates[0],
              data.data[0].geometry.coordinates[1]]
        });
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
  
          let template = `
          <div class="ui three column divided center aligned grid">
            <div class="column">
              <h4 class="ui header">${description}</h4>
              <p><b>${address}</b></p>
            </div>
            <div class="column">
              <h4 class="ui header">MAGNA</h4>
              <h3><b>${feature.properties.gas_price_regular}</b></h3>
            </div>
            <div class="column">
              <h4 class="ui header">PREMIUM</h4>
              <h3><b>${feature.properties.gas_price_premium}</b></h3>
            </div>`
  
          popup.setLngLat(coordinates)
              .setHTML(template)
              .addTo(map);
  
        })
        map.on('mouseleave', 'gas-layer', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
      });
      

        console.log(typeof data.data)
      })
      .catch(err=>{
        console.log(err.message)
      })


    })
  }

  
  }


  export const   saveMoneyMagna = ()=>{
  
    console.log("click!!!!!!!")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
  
        var longitude = pos.coords.longitude
        var latitude = pos.coords.latitude
        console.log(latitude)
        const url = 'https://final-project3.herokuapp.com/near-stations/stations/'
        
        return axios.get(url,{
          params:{
            longitude:longitude,
            latitude:latitude
          }
        })
        .then(data=>{
  
            console.log(JSON.parse(JSON.stringify(data.data)))
  
            console.log(data.data[0].geometry.coordinates[0])
  
            document.getElementById('map') 
  
            let map = new mapboxgl.Map({
              container: 'map',
              zoom:18,
              center: [longitude,latitude],
              style: 'mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs'
            })
  
            map.addControl(new mapboxgl.NavigationControl())
            map.addControl(new MapboxDirections({
              accessToken: mapboxgl.accessToken
            }),'top-left')
  
            map.flyTo({
              center: [
                data.data[0].geometry.coordinates[0],
                data.data[0].geometry.coordinates[1]]
          });
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
    
            let template = `
            <div class="ui three column divided center aligned grid">
              <div class="column">
                <h4 class="ui header">${description}</h4>
                <p><b>${address}</b></p>
              </div>
              <div class="column">
                <h4 class="ui header">MAGNA</h4>
                <h3><b>${feature.properties.gas_price_regular}</b></h3>
              </div>
              <div class="column">
                <h4 class="ui header">PREMIUM</h4>
                <h3><b>${feature.properties.gas_price_premium}</b></h3>
              </div>`
    
            popup.setLngLat(coordinates)
                .setHTML(template)
                .addTo(map);
    
          })
          map.on('mouseleave', 'gas-layer', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
        
  
          console.log(typeof data.data)
        })
        .catch(err=>{
          console.log(err.message)
        })
  
  
      })
    }
  
    
    }