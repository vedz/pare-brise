import React from 'react';
import Adresse from './Adresse/Adresse';
import Creneau from './Creneau/Creneau';
import Intervention from './Intervention/Intervention';
import Vehicule from './Vehicule/Vehicule';
import { connect } from 'react-redux'

const Formulaire = (props) => {
    console.log("[ Formulaire ]", props.reservation)


    const getFormulaireStep = () => {
        switch (props.activeStep) {
            case 0:
                return <Vehicule steps={props.steps}
                    activeStep={props.activeStep}
                    onSubmit={props.onSubmit}
                    handleBack={props.handleBack}
                    reservation={props.reservation} />;
            case 1:
                return <Intervention steps={props.steps}
                    activeStep={props.activeStep}
                    onSubmit={props.onSubmit}
                    handleBack={props.handleBack}
                    reservation={props.reservation} />;
            case 2:
                return <Adresse steps={props.steps}
                    activeStep={props.activeStep}
                    onSubmit={props.onSubmit}
                    handleBack={props.handleBack}
                    reservation={props.reservation} />;
            case 3:
                return <Creneau steps={props.steps}
                    activeStep={props.activeStep}
                    onSubmit={props.onSubmit}
                    handleBack={props.handleBack}
                    reservation={props.reservation} />;
            default:
                return 'cette etape n\'existe pas'
        }
    }

    //J'ai mis un formulaire globale mais peut etre ce serait mieux de faire un form par partie pour que la validation soit plus simple
    return getFormulaireStep()


        ;
};

const mapStateToProps = state => {
    return {
        reservation: state
    }
}

export default connect(mapStateToProps)(Formulaire);
