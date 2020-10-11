import React, { useState } from 'react';
import Stepper from '../../components/Stepper/Stepper';
import Button from '@material-ui/core/Button';
import Formulaire from '../../components/Formulaire/Formulaire';
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'
import './Reservation.css'


function getSteps() {
    return ['Véhicule', 'Intervention', 'Adresse', 'Créneau'];
}

const Reservation = (props) => {
    console.log('[Réservation component]', props);
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(0);

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
        props.onReservationUpdate(data);
    };



    return (
        <div className="reservation">
            <Stepper activeStep={activeStep} steps={steps} />

            <Formulaire
                steps={steps}
                activeStep={activeStep}
                onSubmit={onSubmit}
                handleBack={handleBack}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        reservation: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReservationUpdate: (reservation) => dispatch({ type: actionTypes.UPDATE_RESERVATION, reservation: reservation })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
