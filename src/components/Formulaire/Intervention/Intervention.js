import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

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
                <div className="wrapper-form"></div>
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

export default Intervention;
