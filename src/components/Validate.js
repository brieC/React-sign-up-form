const Validate = (values) => {

    // Check if there are any errors typed by the user. If any, alert the user to correct or if it is invalid.
    let errors = {};

    if (!values.fname) {
        errors.fname = "First name is required.";
    }
    if (!values.lname) {
        errors.lname = "Last name is required.";
    }

    // Missing phone number or more than 10 digits
    if (!values.phone) {
        errors.phone = "Phone number is required.";
    } else if (values.phone.length != 10) {
            errors.phone = "Phone number must be 10 digits";
        }

    // Missing email or is an invalid format with regex
    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }

    return errors;
};

export default Validate;
