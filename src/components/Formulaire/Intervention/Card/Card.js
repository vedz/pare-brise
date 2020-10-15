import React from 'react'
import './Card.css'

const Card = ({img, name, active, zoom, subTitle}) => {
    console.log(active);

    let subTitlecard= subTitle ? 
                <p className='text-center'>{subTitle}</p> : 
                '';

    return (
        <div>
            <div className={`card ${active ? 'active': ''}`} >
                <span>{name}</span>
                <img className={`${zoom ? "zoom": ""}`} src={img}></img>
            </div>
            {subTitlecard}
        </div>
      
    )
}

export default Card
