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
        top: 17.5,
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
        borderTopWidth: 5,
        borderRadius: 1,
    },
})(StepConnector);

//Style de l'icône dans le stepper
const useCustomStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        // height: 33,
        zIndex: 1,
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#F1F1F1',
        border: '3px solid #F1F1F1',
    },
    active: {
        color: '#784af4',
        fontWeight: 'bold',
        border: '3px solid #784af4',
    },
    circle: {
        width: 33,
        height: 33,
        borderRadius: '50%',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    completed: {
        color: 'white',
        backgroundColor: '#784af4',
        zIndex: 1,
        border: '3px solid #784af4',
        fontSize: 18,
    },
});

//Composant personnalisé pour l'icone du stepper
function CustomStepIcon(props) {
    const classes = useCustomStepIconStyles();
    const { active, completed, icon } = props;


    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            <div className={classes.circle}>
                {completed ? (
                    <Check className={classes.completed} />
                ) : (
                        <span className="stepNumber">{icon}</span>
                    )}

            </div>

        </div>
    );
}

const classesStepper = makeStyles((theme) => ({
    root: {
        padding: '10px 0',
        width: '400px',
        '@media (min-width:767px)': {
            width: '700px'
        }
    },
}));

const classesLabel = makeStyles((theme) => ({
    root: {
        '& $active': {
            color: '#784af4',
            fontWeight: 'bold'
        },
        '& $completed': {
            color: '#784af4',
            fontWeight: 'normal'
        },
    },
    completed: {
    },
    active: {
    },
    label: {
        color: "#666666",
    }
}));


const stepper = ({ steps, activeStep }) => {
    const classesS = classesStepper();
    const classesL = classesLabel();
    console.log('[Stepper Component]');

    return (
        <div className="stepper">
            <Stepper
                classes={classesS}
                activeStep={activeStep}
                alternativeLabel
                connector={<QontoConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel classes={classesL} StepIconComponent={CustomStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default stepper;
