import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
function Header(props){
    const children =props.children
    return(
        <React.Fragment>
            {children}
            <header className='header bg-primary px-5 d-flex align-items-center'>
                <Link to='/'>
                <div className='text-white h5' id="logo">Inicio</div>
                </Link>
            </header>
        </React.Fragment>
    )
}


export default Header