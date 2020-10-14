import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { NATURE_INTERVENTION } from '../../../store/reducer';
import './Intervention.css';
import Card from './Card/Card';
import TypeDommage from './TypeDommage/TypeDommage';
import VitreEndommagee from './VitreEndommagee/VitreEndommagee';

const Intervention = ({
    reservation,
    onSubmit,
    activeStep,
    steps,
    handleBack,
}) => {
    console.log("INTERVENTION FORM")
    let dynamicContent;
    const [ natureIntervention, setNatureIntervention ] = useState(reservation.natureIntervention);
    const [ natureInterventionTypeImpact, setNatureInterventionTypeImpact ] = useState(reservation.natureInterventionTypeImpact);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...reservation,
        },
    });

    const setNature = (code_nature) => {
        console.log(code_nature);
        setNatureIntervention(code_nature);
    }

    const setType = (type) => {
        console.log(type);
        setNatureInterventionTypeImpact(type);
    }


    switch(natureIntervention){
        case NATURE_INTERVENTION.PARE_BRISE.code:
            dynamicContent = <TypeDommage setType={setType} 
                                          natureInterventionTypeImpact={natureInterventionTypeImpact}
                                          register={register}
                                          />
            break;
        case NATURE_INTERVENTION.LUNETTE_ARRIERE.code:
            dynamicContent = null;
            break;
        case NATURE_INTERVENTION.VITRE_LATERALE_DROITE.code:
            dynamicContent = <VitreEndommagee />
            break;
        case NATURE_INTERVENTION.VITRE_LATERALE_GAUCHE.code:
            dynamicContent = <VitreEndommagee />
            break;
    }
   

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
                    <div className="nature-content">
                        <input type="hidden" value={natureIntervention}  name="natureIntervention" ref={register} />
                        {Object.keys(NATURE_INTERVENTION).map((nature , index ) =>{
                            return (
                                <div key={nature} className="wrapper-card" onClick={()=> setNature(NATURE_INTERVENTION[nature].code)}>
                                    <Card 
                                        zoom={true}
                                        img={NATURE_INTERVENTION[nature].img} 
                                        name={NATURE_INTERVENTION[nature].label} 
                                        active={natureIntervention === NATURE_INTERVENTION[nature].code} />
                                </div> 
                            )
                        })
                    }
                    </div>

                    {dynamicContent}

                    


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
