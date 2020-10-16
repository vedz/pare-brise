import React from 'react'
import { TYPE_DOMMAGE } from '../../../../store/reducer';
import Card from '../Card/Card';
import './TypeDommage.css'

const TypeDommage = ({ setType, register, natureInterventionTypeImpact }) => {
    return (
        <div className="typedommage">
            <div className="nature-title align-vertically ">
                <h2 className="title">Type de dommmage</h2>
                <p className="text-center">
                    Quelle vitre est endommagée ?
                </p>
            </div>

            <div className="typedommage-content">
                <input type="hidden" value={natureInterventionTypeImpact} name="natureInterventionTypeImpact" ref={register} />
                {Object.keys(TYPE_DOMMAGE).map((type, index) => {
                    return (
                        <div key={type} className="wrapper-card" onClick={() => setType(TYPE_DOMMAGE[type].code)}>
                            <Card
                                img={TYPE_DOMMAGE[type].img}
                                zoom={false}
                                subTitle={TYPE_DOMMAGE[type].label}
                                active={natureInterventionTypeImpact === TYPE_DOMMAGE[type].code} />
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default TypeDommage
