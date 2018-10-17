import axios from 'axios'

const url = "http://localhost:3000"


export const saveMoney = (lng,lat)=>{
  let location = [lng,lat]
  return axios.get(url+'/nearby/list', location)
  .then(res=>{
    console.log(res)
  })
}
