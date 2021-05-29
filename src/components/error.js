import React from 'react';

function Error(props){
    return(
         <h1 className='text-center'>{props.errorMessage}</h1>
    )
}
export default Error;