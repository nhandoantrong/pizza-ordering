import React from 'react';
import { withFormik, Field } from "formik";
import { validateName, validateEmail, validatePassword, validatePasswordConfirm, validatePhone } from "../../util/validateUser"
import InputGroup from '../InputGroup/InputGroup';
import {Link} from "react-router-dom"
const Form = ({
    fields,
    errors,
    touched,
    handleSubmit,
    link
}) => {
    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => {
                const { name, label, type } = field;
                return (
                    <Field name={name}
                        render={({ field }) =>
                            <InputGroup field={field}
                                type={type}
                                labelContent={label}
                                error={errors[name]}
                                touched={touched[name]} />} />
                )
            })}
            <div className="submit-line">
                <Link to={link.to}>{link.message}</Link>

                <button type="submit">REGISTER</button>
            </div>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: (props) => {
        const values = {}
        for (let field of props.fields) {
            const { name, initialValue } = field;
            values[name] = initialValue;
        }
        return values
    },
    validate: values => {
        const error = {};
        const mapError = (key, validate) => {
            if (key === "rePassword") {
                if (validate(values[key], values["password"]))
                    return error[key] = validate(values[key], values["password"])
            }
            if (key === "rePasswordNew") {
                if (validate(values[key], values["passwordNew"]))
                    return error[key] = validate(values[key], values["passwordNew"])
            }
            if (validate(values[key]))
                error[key] = validate(values[key])
        }
        for (let key in values) {
            switch (key) {
                case "name":
                    mapError(key, validateName);
                    continue;
                case "email":
                    mapError(key, validateEmail);
                    continue;
                case "phone":
                    mapError(key, validatePhone);
                    continue
                case "password":
                    mapError(key, validatePassword);
                    continue;
                case "passwordNew":
                    mapError(key, validatePassword);
                    continue;
                case "passwordOld":
                    mapError(key, validatePassword);
                    continue;
                case "rePassword":
                    mapError(key, validatePasswordConfirm);
                    continue
                default:
                    continue;
            }
        }
        return error
    },
    handleSubmit: values => {
        console.log(values)
    }
})(Form);