import React from 'react';
import { withFormik, Field } from "formik";
import InputGroup from '../../components/InputGroup/InputGroup';
import { emailRegex } from "../../util/regex"
import { Link } from "react-router-dom";

const LoginForm = ({
    touched,
    errors,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" render={({ field }) => {
                return <InputGroup
                        field={field} 
                        type="text" 
                        labelContent="Your name" 
                        error={errors.name} 
                        touched={touched.name} />
            }} />
            <Field name="email" render={({ field }) => {
                return <InputGroup
                        field={field} 
                        type="text" 
                        labelContent="Email" 
                        error={errors.email} 
                        touched={touched.email} />
            }} />
            <Field name="password" render={({ field }) => {
                return <InputGroup
                        field={field} 
                        type="password" 
                        labelContent="Password" 
                        error={errors.password} 
                        touched={touched.password} />
            }} />
            <Field name="rePassword" render={({ field }) => {
                return <InputGroup
                        field={field} 
                        type="password" 
                        labelContent="Confirm password" 
                        error={errors.rePassword} 
                        touched={touched.rePassword} />
            }} />

            <div className="submit-line">
                <Link to="/">Already have an account ?</Link>

                <button type="submit">REGISTER</button>
            </div>

        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({ name: '', email: "", password: "", rePassword: "" }),

    // Custom sync validation
    validate: values => {
        const { name, email, password, rePassword } = values;
        const errors = {}
        if (!name) {
            errors.name = "Please provide your name"
        }
        console.log(email);
        console.log(emailRegex.test(email))
        if (!email) {
            errors.email = "Please provide your email"
        } else if (!emailRegex.test(email)) {
            errors.email = "Email must be valid"
        }

        if (!password) {
            errors.password = "Please provide password"
        }
        else if (password.length < 8) {
            errors.password = "Password is more than 8-digit long"
        }

        if (rePassword !== password) {
            errors.rePassword = "Password does not match"
        }


        return errors

    },

    handleSubmit: (values, { setSubmitting }) => {

        console.log(values);
    },

    displayName: 'RegisterForm',
})(LoginForm);