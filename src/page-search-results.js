import React from 'react';
import Search from './components/search.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/results';
class PageSearchResult extends React.Component{
  /* el state se pone en el padre para que lo reciban los hijos
  Estos los reciben a traves de this.props.variableofuncion */
  state={
    busqueda:''
  }
  
  componentDidMount(){
    let search = this.props.history.location.search
    .substr(1)
    .replace('%20',' ')
    this.setState(
      {
        busqueda:search
      }
    )
  }
  handleChange =e =>{
    e.preventDefault()
    this.setState({
      busqueda:e.target.value
    })
  }
  render(){
    return (
      <React.Fragment >
        
      <Search
      /* aca estoy definiendo el nombre del variable/funcion y su valor a pasar
      al hijo como prop*/
      onChange={this.handleChange}
       busqueda={this.state.busqueda} />
      <Results busqueda={this.state.busqueda} />
      </React.Fragment >
    );
 }
}

export default PageSearchResult;
