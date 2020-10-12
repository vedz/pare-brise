import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { NATURE_INTERVENTION } from '../../../store/reducer';
import PARE_BRISE from '../../../assets/images/PARE_BRISE.svg';
import './Intervention.css';

const Intervention = ({
    reservation,
    onSubmit,
    activeStep,
    steps,
    handleBack,
}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation,
        },
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper-form">
                    <div className="nature-title align-vertically ">
                        <h2 className="title">Nature de l’intervention</h2>
                        <p className="text-center">
                            Sélectionnez une vitre endommagée, vous pourrez
                            déclarer d’autres vitres en bas de ce formulaire.
                        </p>
                    </div>
                    {/* Créer un composant ItemImage. Trouver le moyen de rendre générique l'affichage des enums proprement */}
                    <div className="nature-content">
                        <div className="wrapper-img">
                            <span>Pare-brise</span>
                            <img src={PARE_BRISE}></img>
                        </div>
                        <div className="wrapper-img">
                            <span>Pare-brise</span>
                            <img src={PARE_BRISE}></img>
                        </div>
                        <div className="wrapper-img">
                            <span>Pare-brise</span>
                            <img src={PARE_BRISE}></img>
                        </div>
                        <div className="wrapper-img">
                            <span>Pare-brise</span>
                            <img src={PARE_BRISE}></img>
                        </div>
                    </div>
                </div>
            </form>

            <div className="wrapper-buttons">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >
                    Adresse
                </Button>
            </div>
        </div>
    );
};

export default Intervention;
