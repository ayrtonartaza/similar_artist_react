import React from 'react';
import ArtistCard from './artist-card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './artist-card.css'
import './results.css'
import Loading from './loading';
import Error from './error';
import {Link} from 'react-router-dom'

class Results extends React.Component{
    state={
      data:{
        similarartists:{
          artist:[]
        }
      },
      loading:false,
      error:false,
      message:''
    };
    /* componentDidMount(){

    } */
    async componentWillReceiveProps(e){
      let termino = e.busqueda;
      console.log(e)
      try{
      this.setState({
        loading:true
      })
      const key = '95c3b4b540def5f7ea80c09198d8aa8e';
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=${key}&format=json`;
      const response = await fetch(url);
      const data =await response.json();

      if(data.error){
        this.setState(
          {
            loading:false,
            error:true,
            message:data.message

          }
        )
      }
      else{
      this.setState({
        error:false,
        loading:false,
        data:data
      }
      )
    }
    /* aca termina el async */}
    catch(error){
      this.setState(
        {
          loading:false,
          error:true,
          message:'No se pudo llamar al servidor'
        }
      )
    }
  }
    
    
  
    render(){
    return(
      <React.Fragment>
      
      {this.state.loading && <Loading />}
      {this.state.error && <Error errorMessage={this.state.message} />}
      <div className='container mt-5 results--container'>
      {this.state.data.similarartists.artist.map((item,i)=>{
        return  <Link to={'/artist?' + item.name}><ArtistCard 
        img={item.image[2]['#text']}
        titulo={item.name}
        key={i}
        />
        </Link>
      })}  
  </div>
      
    </React.Fragment>
    )
    }
}

export default Results;