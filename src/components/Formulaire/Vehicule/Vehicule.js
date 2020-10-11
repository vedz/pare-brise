import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import './Vehicule.css'

const Vehicule = ({ reservation, onSubmit, activeStep, steps, handleBack }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation
        }
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="wrapper-form">
                    <div className="immatriculation-title align-vertically ">
                        <h1 className="title">Mon véhicule</h1>
                        <p>Je saisis mon immatriculation :</p>
                    </div>
                    <div className="immatriculation-content align-vertically">
                        <input className="immatriculation-input" name="nom" ref={register} placeholder="AA-000-AA" />
                        <p style={{ textAlign: 'center' }}>Saisir avec des tirets pour les immatriculations au format AA-000-AA ou avec des espaces pour celles au format 000 AA 00</p>

                    </div>
                    <div className="assurance-title align-vertically">
                        <h1 className="title">Mon assurance</h1>
                        <p style={{ textAlign: 'center' }}>Je sélectionne mon assurance et saisis mon numéro de police d'assurance :</p>
                    </div>
                    <div className="assurance-content align-vertically">
                        <input name="nom" ref={register} />
                    </div>
                </div>


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

export default Vehicule;
