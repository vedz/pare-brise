import React from 'react';
import Adresse from './Adresse/Adresse';
import Creneau from './Creneau/Creneau';
import Intervention from './Intervention/Intervention';
import Vehicule from './Vehicule/Vehicule';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

const Formulaire = ({ steps, activeStep, onSubmit, handleBack }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    //J'ai mis un formulaire globale mais peut etre ce serait mieux de faire un form par partie pour que la validation soit plus simple
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: activeStep == 0 ? 'block' : 'none' }}>
                    <Vehicule register={register} />
                </div>
                <div style={{ display: activeStep == 1 ? 'block' : 'none' }}>
                    <Intervention register={register} />
                </div>
                <div style={{ display: activeStep == 2 ? 'block' : 'none' }}>
                    <Adresse register={register} />
                </div>
                <div style={{ display: activeStep == 3 ? 'block' : 'none' }}>
                    <Creneau register={register} />
                </div>

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
                    onSubmit={onSubmit}
                >
                    {activeStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
                </Button>
            </form>
        </div>
    );
};

export default Formulaire;
