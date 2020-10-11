import React from 'react';

const Vehicule = ({ register }) => {
    return (
        <div>
            <input type="texte" name="test" ref={register} />
        </div>
    );
};

export default Vehicule;
