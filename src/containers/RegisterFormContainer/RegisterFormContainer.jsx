import React from 'react';
import { withFormik, Field } from "formik";
import InputGroup from '../../components/InputGroup/InputGroup';
import { emailRegex } from "../../util/regex"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerToServer } from "../../store/actions/UserAction";
import { userExisted } from "../../util/errorMessageConstant"

const RegisterFormContainer = ({
    touched,
    errors,
    handleSubmit,
    registerError,
    values
}) => {

    if (registerError.message === userExisted && registerError.currentEmail === values.email) {
        errors.email = userExisted;
    }
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
                <Link to="/login">Already have an account ?</Link>

                <button type="submit">REGISTER</button>
            </div>

        </form>
    );
};


const mapStateToProps = state => ({
    registerError: state.error.registerErr
})

const mapDispatchToProps = dispatch => ({
    register: ({ name, email, password, rePassword }) => {
        dispatch(registerToServer({ name, email, password, rePassword }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({ name: '', email: "", password: "", rePassword: "" }),

    // Custom sync validation
    validate: (values, props) => {

        const { name, email, password, rePassword } = values;
        const errors = {}

        if (!name) {
            errors.name = "Please provide your name"
        }

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

    handleSubmit: (values, { props }) => {

        props.register({ ...values });
    },

    displayName: 'RegisterForm',
})(RegisterFormContainer));