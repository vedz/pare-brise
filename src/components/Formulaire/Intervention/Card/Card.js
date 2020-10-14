import React from 'react'
import './Card.css'

const Card = ({img, name, active, zoom}) => {
    console.log(active);
    return (
        <div className={`card ${active ? "active": ""} ${zoom ? "zoom": ""}`} >
            <span>{name}</span>
            <img src={img}></img>
        </div>
    )
}

export default Card
