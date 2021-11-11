import React, { useState } from 'react';
import SignUp from './SignUp';
import SignUpSuccess from './SignUpSuccess';


//Show sign up form or success message
const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {/* When all input fields are submitted correctly, a message will display. If not correct, required input fields will alert. */}
            {!formIsSubmitted ? (<SignUp submitForm={submitForm} />) : (<SignUpSuccess />)}
        </div>
    );
};

export default Form;
