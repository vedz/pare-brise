import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import React from 'react';

import './Stepper.css';

//Style pour le stepper
const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50%)',
        right: 'calc(50%)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

//Style de l'icône dans le stepper
const useCustomStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        zIndex: 1,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
        fontWeight: 'bold',
    },

    circle: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        zIndex: 2,
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

//Composant personnalisé pour l'icone du stepper
function CustomStepIcon(props) {
    const classes = useCustomStepIconStyles();
    const { active, completed, icon } = props;

    console.log(props);

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle}>
                    <span className="wtf">{icon}</span>
                </div>
            )}
        </div>
    );
}

const matStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 0',
    },
}));

function getSteps() {
    return ['Véhicule', 'Intervention', 'Adresse', 'Créneau'];
}

const stepper = () => {
    const classes = matStyles();
    const steps = getSteps();
    console.log('[ReservationStepper Component]');

    return (
        <div>
            <Stepper
                classes={classes}
                alternativeLabel
                connector={<QontoConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={CustomStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default stepper;
