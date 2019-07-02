import React from 'react';
import { withFormik, Field } from "formik"
import InputGroup from '../../components/InputGroup/InputGroup';
import {numberRegex} from "../../util/regex"

const DeliveryFormContainer = ({
    touched,
    errors,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="address" render={({ field }) => (
                <InputGroup field={field}
                    type="text"
                    labelContent="Address"
                    touched={touched.address}
                    error= {errors.address} />
            )} />

            <Field name="phone" render={({ field }) => (
                <InputGroup field={field}
                    type="text"
                    labelContent="Phone" 
                    touched={touched.phone}
                    error= {errors.phone}/>
            )} />

            <div className="submit-line">
                <div></div>
                <button type="submit">CONFIRM</button>
            </div>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({ address: '', phone: "" }),

    // Custom sync validation
    validate: values => {
        const errors ={};

        if (!values.address){
            errors.address="Address is required";
        }

        if (!values.phone){
            errors.phone = "Phone number is required"
        }
        else if (!numberRegex.test(values.phone)){
            errors.phone = "Phone number only contains numbers"
        }
        return errors;

    },

    handleSubmit: (values) => {
        console.log(values)
    },

    displayName: 'DeliveryForm',
})(DeliveryFormContainer);