import React,{Component} from  'react'

class Footer extends Component{

  render(){
    return(

      <div>
        <section className='Footer ui grid'>
          <div className='ten wide column ui middle aligned'>
            <h2 className='center aligned two column row'>Encuentra tu gasolinera mas cercana con los precios mas bajos</h2>
          </div> 
          <div className='six wide column ui middle aligned'>
            <h3>Con solo unos clicks encontraras la mejor gasolinera</h3>
          </div>   
        </section>
      </div>

    );
  }

}

export default Footer