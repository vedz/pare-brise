import React, { useState } from 'react';
import Stepper from '../../components/Stepper/Stepper';
import Button from '@material-ui/core/Button';
import Formulaire from '../../components/Formulaire/Formulaire';


function getSteps() {
    return ['Véhicule', 'Intervention', 'Adresse', 'Créneau'];
}

const Reservation = () => {
    console.log('[Réservation component]');
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(0);
    const [reservation, setReservation] = useState({
        nom: '',
        prenom: ''
    })

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep < steps.length ? prevActiveStep + 1 : prevActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : 0);
    };

    return (
        <div className="reservation">

            <Stepper activeStep={activeStep} steps={steps} />

            <Formulaire activeStep={activeStep} setReservation={setReservation} />

            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                Retour
              </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
            </Button>
        </div>
    );
};

export default Reservation;
