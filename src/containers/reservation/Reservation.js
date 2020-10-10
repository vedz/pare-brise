import React from 'react';
import Stepper from '../../components/Stepper/Stepper';

const reservation = () => {
    console.log('[Réservation component]');

    return (
        <div className="reservation">
            <Stepper />
        </div>
    );
};

export default reservation;
