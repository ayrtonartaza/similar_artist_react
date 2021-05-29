import React from 'react';
import './form.css'
import './search.css'
class Search extends React.Component{
    handleSubmit = e =>{
        e.preventDefault()
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group d-flex flex-column">
                        <h2 className='mt-4'>{this.props.busqueda}</h2>
                        <label htmlFor="inputsearch">Buscar</label>
                       <input id='input--search'
                       className="input-search" 
                       placeholder={this.props.valorbusqueda}
                       type="text" 
                       name='inputsearch'
                       value={this.props.valorbusqueda}
                       onChange={this.props.onChange}
                       />
                      
                    </div>
                    </form>
                </div>
           </React.Fragment>
           
        )
    }

}
export default Search;