import React from 'react'
import './Card.css'

const Card = ({ img, name, active, zoom, subTitle }) => {
    console.log(active);

    let subTitlecard = subTitle ?
        <p className='text-center'>{subTitle}</p> :
        '';

    return (
        <div style={{ height: "100%" }}>
            <div className={`card ${active ? 'active' : ''}`} >
                <span>{name}</span>
                <div className={`card-image ${zoom ? 'zoom' : ''}`} style={{ backgroundImage: "url(" + img + ")" }}></div>
                {/* <img className={`${zoom ? "zoom": ""}`} src={img}></img> */}
            </div>
            {subTitlecard}
        </div>

    )
}

export default Card
