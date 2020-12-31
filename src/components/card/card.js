import React from 'react';
import './card.scss';

const Card = (props) => {
    const {src, alt, title, information} = props;

return(
    <div class="card-container">
        <div class="card-image-container">
            <img src={src} alt={alt}></img>
        </div>
        <div class="card-content-container">
            <h1 class="card-title">{title}</h1>
            <p class="card-information">{information}</p>
        </div>
    </div>
)
}

export default Card;