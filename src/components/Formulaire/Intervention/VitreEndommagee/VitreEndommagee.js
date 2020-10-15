import React from 'react'

import Card from '../Card/Card';
import './VitreEndommagee.css'

const VitreEndommagee = ({setVitre, register,natureInterventionVitre,VITRE }) => {
    return (
        <div className="vitre-endommagee">
        <div className="nature-title align-vertically ">
            <h2 className="title">Vitre endommagée</h2>
            <p className="text-center">
                Quelle vitre est endommagée ? 
            </p>
        </div>
        
        <input type="hidden" value={natureInterventionVitre}  name="natureInterventionVitre" ref={register} />
        <div className="vitre-endommagee-content">
                   
                    {Object.keys(VITRE).map((type , index ) =>{
                        return (
                            <div key={type} className="wrapper-card" onClick={()=> setVitre(VITRE[type].code)}>
                                <Card 
                                    img={VITRE[type].img} 
                                    zoom={false}
                                    name={VITRE[type].label} 
                                    active={natureInterventionVitre === VITRE[type].code} />
                            </div> 
                        )
                    })
                }
        </div>
        
    </div>
    )
}

export default VitreEndommagee
