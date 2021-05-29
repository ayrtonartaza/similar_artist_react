import React from 'react';
import './components/artist-card.css';
import './components/results.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import ArtistCard from './components/artist-card'
import {Link} from 'react-router-dom'
class PageArtist extends React.Component{
  
  state={
    titulo:'',
    bio:'',
    img:null,
    similar:[]
  }
  
  /* aca creo la funcion asincrona para poder reutilizarla, a partir de location.search
  hago la llamada a la api */
  fetchData =async ()=>{
    let search = this.props.history.location.search
    .substr(1)
    .replace('%20',' ')
    const key = '95c3b4b540def5f7ea80c09198d8aa8e';
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${search}&api_key=${key}&format=json`
    
    try {
        const respuesta = await fetch(url)
        const respuestaformat = await respuesta.json()
        this.setState({
          titulo:search,
          bio:respuestaformat.artist.bio.summary,
          img:respuestaformat.artist.image[2]['#text'],
          similar: respuestaformat.artist.similar.artist
        })
    } catch {
        console.log('sopa macacao')
    }
    
  }
  /* aca hace la llamada a la api cuando el componente es montado(viniendo de la pagina de resultados) */
  componentDidMount(){
    this.fetchData()
  }
  /* aca hace la llamada a la api cuando this.props.location cambia , se hace con conmponentDidUpdate
  . Verifica si cambio y hace la llamada con el nuevo valor*/
  componentDidUpdate(prevProps){
    if(this.props.location !== prevProps){
      this.fetchData()
    }
  }


  render(){
    return (
      <React.Fragment >
        <Header />
      <div className='container d-flex flex-column justify-content-center mx-auto pt-4 mt-5 align-items-center'>
            <img className='img-fluid w-25 rounded-circle' src={this.state.img} alt="" />
            <h2 className='text-capitalize'>{this.state.titulo}</h2>
            <p className='text-left px-5 mt-2'>{this.state.bio}</p>
      </div>
      <div className='container mt-5 results--container'>
       {this.state.similar.map((item,i)=>{
         return <Link to={'/artist?' + item.name}>
         <ArtistCard 
         img={item.image[2]['#text']}
         titulo={item.name}
         key={i}   >
         </ArtistCard>
         </Link>
       })}
      </div>
      </React.Fragment>
    );
 }
}

export default PageArtist;
