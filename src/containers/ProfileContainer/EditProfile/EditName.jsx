import React from 'react';
import { withFormik, Field } from "formik";
import InputGroup from '../../../components/InputGroup/InputGroup';
const EditName = ({
    errors,
    touched,
    handleSubmit,
    name,
    values,
    setFieldValue
}) => {

    const handleReset = () =>{
        setFieldValue("name",name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" render={({ field }) => (
                <InputGroup field={field} type="text" labelContent="Name" error={errors.name} touched={touched.name} />
            )} />
            {name === values.name ? null : <div className="submit-line">
                <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                <button type="submit">CONFIRM</button>
            </div>
            }

        </form>
    );
};

export default withFormik({
    mapPropsToValues: (props) => ({ name: props.name }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        return errors;
    },

    handleSubmit: (values,{props}) => {
        props.changeName(values.name);
    },

    displayName: 'ChangeNameForm',
})(EditName);