import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import './Vehicule.css';
import logoEurope from '../../../assets/images/icn_europe.svg';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core';

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#784af4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#784af4',
            },
            '&:hover fieldset': {
                borderColor: '#784af4',
                borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#784af4',
            },
        },
    },
})(TextField);

const styleInput = makeStyles({
    root: {
        width: '100%',
        marginTop: '0.5em',
    },
});

const styleInputVoiture = makeStyles({
    root: {
        width: '100%',
        marginTop: '0.5em',
        border: '1px solid red',
        background: 'yellow',
    },
});

const Vehicule = ({ reservation, onSubmit, activeStep, steps, handleBack }) => {
    const styleI = styleInput();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation,
        },
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper-form">
                    <div className="immatriculation-title align-vertically ">
                        <h2 className="title">Mon véhicule</h2>
                        <p>Je saisis mon immatriculation :</p>
                    </div>
                    <div className="immatriculation-content align-vertically">
                        <input
                            className="immatriculation-input"
                            name="plaque"
                            ref={register}
                            placeholder="AA-000-AA"
                        />
                        <div className="immatriculation-input-left">
                            <div className="immatriculation-input-left-wrapper">
                                <img src={logoEurope} />
                                <span>F</span>
                            </div>
                        </div>
                        <SearchIcon className="immatriculation-input-rigth" />
                        <p style={{ textAlign: 'center' }}>
                            Saisir avec des tirets pour les immatriculations au
                            format AA-000-AA ou avec des espaces pour celles au
                            format 000 AA 00
                        </p>
                    </div>
                    <div className="assurance-title align-vertically">
                        <h2 className="title">Mon assurance</h2>
                        <p style={{ textAlign: 'center' }}>
                            Je sélectionne mon assurance et saisis mon numéro de
                            police d'assurance :
                        </p>
                    </div>

                    <div className="assurance-content align-vertically">
                        <div className="wrapper-fields">
                            <TextField
                                id="outlined-basic"
                                label="Marque"
                                variant="outlined"
                                name="marque"
                                inputRef={register()}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Modèle"
                                variant="outlined"
                                name="modele"
                                inputRef={register()}
                            />
                        </div>
                        <CustomTextField
                            classes={styleI}
                            id="outlined-basic"
                            label="Assureur"
                            variant="outlined"
                            name="assureur"
                            inputRef={register()}
                        />
                        <CustomTextField
                            classes={styleI}
                            id="outlined-basic"
                            label="Numéro de police d'assurance"
                            variant="outlined"
                            name="num_assurance"
                            inputRef={register()}
                        />
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
                    Accéder à l'étape Intervention
                </Button>
            </div>
        </div>
    );
};

export default Vehicule;
