import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

const Creneau = ({ reservation, onSubmit, activeStep, steps, handleBack }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation
        }
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>



            </form>
            <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
            >
                Retour
         </Button>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
            >
                {activeStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
            </Button>
        </div>
    );
};

export default Creneau;
