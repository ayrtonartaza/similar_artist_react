import React from 'react';

import './components/form.css'
class Home extends React.Component{
    state={
        valorbusqueda:""
    }
    /* determina el valor de valorbusqueda que ira a la url */
    onChange = e=>{
        this.setState({
            valorbusqueda:e.target.value
        })
    }
    /* cuando la busqueda/form es enviado determina la url react-router-dom)*/
    handleSubmit = e =>{
        e.preventDefault()
        this.props.history.push("/busqueda?" + this.state.valorbusqueda)
    }
    render(){
        return <div className="container" id='form-home'>
                <div className="container mt-5">
                        <form action="" onSubmit={this.handleSubmit} >
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="inputsearch">Escribe una banda o solista</label>
                                <input className="input-search border-primary" 
                                placeholder='coldplay'
                                type="text" 
                                name='inputsearch'
                                value={this.state.valorbusqueda}
                                onChange={this.onChange}
                                />
                        </div>
                        <button type='submit' className="btn bg-primary text-white  mt-2">Buscar similar</button>
                        </form>
                    </div> 
        </div>
    }
}

export default Home;