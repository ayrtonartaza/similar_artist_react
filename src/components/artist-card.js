import React from 'react';
import './artist-card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ArtistCard extends React.Component{
    render(){
        return (
            <div className='card-rock border-rounded'>
                    <img className='img-fluid rounded-circle' src={this.props.img} alt="" />
                    <h6 className='titulo text-center text-dark'>{this.props.titulo}</h6>
            </div>
        )
        
    }
}
export default ArtistCard;