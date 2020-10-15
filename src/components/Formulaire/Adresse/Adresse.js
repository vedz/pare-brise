import React , {useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import './Adresse.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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

const styleInputSearch = makeStyles({
    input:{
        padding:0 
        }
});


const Adresse = ({ reservation, onSubmit, activeStep, steps, handleBack }) => {
    const styleI = styleInput();
    const styleISearch = styleInputSearch();
    const [isSameAdress , setIsSameAdress]=useState();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation
        }
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper-form">
                    <div className="nature-title align-vertically ">
                        <h2 className="title">Votre adresse</h2>
                        <p className="text-center">
                        Saisissez son l’adresse correspondant à l’immatriculation de votre véhicule.
                        </p>
                    </div>
              
                    <div className="nature-content">
                        <CustomTextField
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Nom"
                                    variant="outlined"
                                    name="nom"
                                    inputRef={register()}
                                />
                        <CustomTextField
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Prénom"
                                    variant="outlined"
                                    name="prenom"
                                    inputRef={register()}
                                />
                        <div className="wrapper-button">
                        <CustomTextField
                                    InputProps={{
                                        style: {
                                            paddingRight:"64px"
                                        }
                                    }}
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Adresse"
                                    variant="outlined"
                                    name="adresse_client.adresse1"
                                    inputRef={register()}
                                />
                            <SearchIcon className="iconSearch"/>
                        </div>
                        <CustomTextField
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    name="adresse_client.email"
                                    inputRef={register()}
                                />
                        <CustomTextField
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Téléphone"
                                    variant="outlined"
                                    name="adresse_client.telephone"
                                    inputRef={register()}
                                />
                    </div>

                    <div className="nature-title align-vertically ">
                        <h2 className="title">Adresse d’intervention</h2>
                        <p className="text-center">
                            L’adresse d’intervention est-elle identique à votre adresse d’immatriculation ?
                        </p>
                    </div>
                    <div className="nature-content">
                        <div className="wrapper-button">
                        <CustomTextField
                                    InputProps={{
                                        style: {
                                            paddingRight:"64px"
                                        }
                                    }}
                                    classes={styleI}
                                    id="outlined-basic"
                                    label="Adresse de l'intervention"
                                    variant="outlined"
                                    name="adresse_intervention.adresse1"
                                    inputRef={register()}
                                />
                            <SearchIcon className="iconSearch"/>
                        </div>
                      
                    </div>

                    <div className="nature-title align-vertically ">
                        <h2 className="title">Avez-vous un abris couvert ?</h2>
                        <p className="text-center">
                        Si votre véhicule ne se trouve pas dans un abri couvert pour l'intervention de notre technicien,
                         le rendez-vous peut être décalé en fonction des conditions météorologiques.
                        </p>
                    </div>
                    <div className="nature-content">
                        <div className="wrapper-big-button">
                                <div className="big-button">Oui</div>
                                <div className="big-button">Non</div>
                        </div>
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

export default Adresse;
