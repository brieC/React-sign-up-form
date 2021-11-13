import React, { useEffect, useState } from 'react';
import Validate from './Validate';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const SignUp = ({ submitForm }) => {
    // Checked checkboxe buttons
    const [check, setIsChecked] = useState({});

    // Checked radio buttons
    const [radio, setRadio] = useState({});

    // Keep track of values of each input tag
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
    })

    // Check for missing input fields and if data is typed in correctly (mostly email)
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    // When user inserts value
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    // Prevent page reloading when the sign up button is clicked
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validate(values));
        setDataIsCorrect(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <Container>
        <div className="container">
            <div className="box">
                <div>
                    <h1 className="title">Create Account</h1>
                </div>
                <Form>
                <Form.Group>
                <form className="form-box">
                    <div className="fname">
                        <label className="label" >First Name</label>
                        <input
                            className="input"
                            type="text"
                            name="fname"
                            value={values.fname}
                            onChange={handleChange} />
                        {/* When no first name is detected, show required */}
                        {errors.fname && <p className="error">{errors.fname}</p>}
                    </div>
                    <div className="lname">
                        <label className="label" >Last Name</label>
                        <input
                            className="input"
                            type="text"
                            name="lname"
                            value={values.lname}
                            onChange={handleChange} />
                        {/* When no last name is detected, show required */}
                        {errors.lname && <p className="error">{errors.lname}</p>}
                    </div>
                    <div className="phone">
                        <label className="label" >Phone Number</label>
                        <input
                            className="input"
                            type="number"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange} />
                        {/* When no phone number is detected, show required */}
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="email">
                        <label className="label" >Email</label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange} />
                        {/* When no email is detected, show required or invalid if not email format */}
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="gender">
                        <label className="label" name="gender">Gender</label>
                        <br /><br />

                        {/* Radio buttons */}
                        <InputGroup.Radio
                            className="radio"
                            type="radio"
                            checked={radio === "male"}
                            value="male"
                            onChange={(e) => { setRadio(e.target.value) }} />
                        <label className="radiolabel">Male</label>
                        <br />

                        <InputGroup.Radio
                            className="radio"
                            type="radio"
                            checked={radio === "female"}
                            value="female"
                            onChange={(e) => { setRadio(e.target.value) }} />
                        <label className="radiolabel">Female</label>
                        <br />

                        <InputGroup.Radio
                            className="radio"
                            type="radio"
                            checked={radio === "none"}
                            value="none"
                            onChange={(e) => { setRadio(e.target.value) }} />
                        <label className="radiolabel">Rather not say</label>

                        {/* To add line above checkboxes to make form more appealing */}
                        <input className="input" disabled />
                    </div>

                    {/* Checkboxes */}
                    <div className="opt">
                        <InputGroup.Checkbox
                            className="check"
                            id="first"
                            type="checkbox"
                            checked={check === "call"}
                            value="call"
                            onChange={(e) => { setIsChecked(e.target.value) }} />
                        <label className="checklabel">Call anytime!</label>
                    </div>
                    <div className="opt2">
                        <InputGroup.Checkbox
                            className="check"
                            id="second"
                            type="checkbox"
                            checked={check === "nocall"}
                            value="nocall"
                            onChange={(e) => { setIsChecked(e.target.value) }} />
                        <label className="checklabel">Please don't...</label>
                    </div>
                    <br />

                    {/* Submit button */}
                    <div>
                        <Button className="submit" onClick={handleFormSubmit}>Sign Up!</Button>
                    </div>
                </form>
                </Form.Group>
                </Form>
            </div>
        </div>
        </Container>
        
    );
};

export default SignUp
