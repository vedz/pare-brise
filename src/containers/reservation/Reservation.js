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
        prenom: '',
    });

    const handleBack = () => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep > 0 ? prevActiveStep - 1 : 0
        );
    };

    const onSubmit = (data) => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep < steps.length ? prevActiveStep + 1 : prevActiveStep
        );
        console.log(data);
    };
    return (
        <div className="reservation">
            <Stepper activeStep={activeStep} steps={steps} />

            <Formulaire
                steps={steps}
                activeStep={activeStep}
                setReservation={setReservation}
                onSubmit={onSubmit}
                handleBack={handleBack}
            />
        </div>
    );
};

export default Reservation;
