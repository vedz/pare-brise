import React from 'react'
import Adresse from './Adresse/Adresse';
import Creaneau from './Creneau/Creaneau';
import Intervention from './Intervention/Intervention';
import Vehicule from './Vehicule/Vehicule'

const Formulaire = ({ activeStep }) => {

    console.log(activeStep);
    const stepFormulaire = () => {
        switch (activeStep) {
            case 0:
                return <Vehicule />
            case 1:
                return <Intervention />
            case 2:
                return <Adresse />
            case 3:
                return <Creaneau />
            default:
                return 'Cette partie n\'existe pas'

        }
    }

    return (
        <div className="Formulaire">
            {stepFormulaire()}
        </div>
    )
}

export default Formulaire
