import React from 'react'
import { Component } from 'react'
import Anime from 'react-anime'
import '../css/Card.css';

class Card extends Component {
    
    render() {

        let animeImg =  {
            easing: 'easeOutExpo',
            opacity: [0,1],
            translateY: [200,0],
        }

        let animeProps = {
            easing: 'easeOutExpo',
            opacity: [0,1],
            translateY: [-200,0],
        };

        return(
            <div className='Card'>
                <Anime {...animeImg}>
                    <img src={this.props.details.image} alt=""/>
                </Anime>
                <Anime {...animeProps}>
                    <h1>{this.props.details.titre}</h1>
                </Anime>
            </div>
        )
    }
}

export default Card;