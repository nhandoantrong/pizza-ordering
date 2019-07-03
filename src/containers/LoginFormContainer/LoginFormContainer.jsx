import React from 'react';
import { withFormik, Field } from "formik";
import InputGroup from '../../components/InputGroup/InputGroup';
import { Link } from "react-router-dom"
import { emailRegex } from "../../util/regex";
import { connect } from "react-redux";
import { loginToServer } from "../../store/actions/UserAction"
import { wrongPassword,wrongEmail } from "../../util/errorMessageConstant"
const LoginFormContainer = ({
    touched,
    errors,
    handleSubmit,
    loginErr,
    values

}) => {
    if (loginErr.message === wrongPassword && values.password === loginErr.currentPassword &&values.email === loginErr.currentEmail) {
        errors.password = wrongPassword;
    }
    else if (loginErr.message === wrongEmail && values.email === loginErr.currentEmail  && values.password === loginErr.currentPassword) {
        errors.email = wrongEmail;
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <div className="submit-line">
                <Link to="/register">Not having an account ?</Link>

                <button type="submit">LOG IN</button>
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        loginErr: state.error.loginErr

    }
}

const mapDispatchToProps = dispatch => ({
    login: (userLogin) => {
        dispatch(loginToServer(userLogin));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({ email: '', password: "" }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Email must be vallid"
        }

        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 8) {
            errors.password = "Password must contain more than 8 degits"
        }
        return errors;
    },

    handleSubmit: (values, { props }) => {
        props.login(values);

    },


    displayName: 'LoginForm',
})(LoginFormContainer));