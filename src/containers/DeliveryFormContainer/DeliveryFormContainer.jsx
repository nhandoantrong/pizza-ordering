import React from 'react';
import { withFormik, Field } from "formik"
import InputGroup from '../../components/InputGroup/InputGroup';
import { numberRegex } from "../../util/regex"
import { changeDeliveryInfo } from "../../store/actions/UserAction"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentAddress } from "./GetCurrentAddress";
import "./DeliveryFormContainer.scss"

const DeliveryFormContainer = ({
    touched,
    errors,
    handleSubmit,
    isCanBeModified = false,
    setFieldValue
}) => {
    const getAddress = () => {
        getCurrentAddress().then(res => {
            setFieldValue("address", res[0].formatted_address)
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            {isCanBeModified ? <div className="address-field">
                <Field name="address" render={({ field }) => (
                    <InputGroup field={field}
                        type="text"
                        labelContent="Address"
                        touched={touched.address}
                        error={errors.address}
                        disabled={!isCanBeModified}
                    />
                )} />
                <button onClick={getAddress} type="button"><i className="fas fa-map-marked-alt"></i></button>
            </div>
                : <Field name="address" render={({ field }) => (
                    <InputGroup field={field}
                        type="text"
                        labelContent="Address"
                        touched={touched.address}
                        error={errors.address}
                        disabled={!isCanBeModified}
                    />
                )} />}



            <Field name="phone" render={({ field }) => (
                <InputGroup field={field}
                    type="text"
                    labelContent="Phone"
                    touched={touched.phone}
                    error={errors.phone}
                    disabled={!isCanBeModified}
                />
            )} />

            {isCanBeModified ? <div className="submit-line">
                <Link to="/shopping-cart">Change your cart again?</Link>
                <button type="submit">CONFIRM</button>
            </div> : null}
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    changeDeliveryInfo: (address, phone) => {
        dispatch(changeDeliveryInfo(address, phone))
    }
})

const mapStateToProps = state => ({
    address: state.user.user.address,
    phone: state.user.user.phone,
})

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: (props) => ({ address: props.address, phone: props.phone }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.address) {
            errors.address = "Address is required";
        }

        if (!values.phone) {
            errors.phone = "Phone number is required"
        }
        else if (!numberRegex.test(values.phone)) {
            errors.phone = "Phone number only contains numbers"
        } else if (values.phone.length !== 10) {
            errors.phone = "Phone number must contain 10 digits"
        }
        return errors;

    },

    handleSubmit: (values, { props }) => {
        props.changeDeliveryInfo(values.address, values.phone);

        props.history.push("/billing")
    },

    displayName: 'DeliveryForm',
})(DeliveryFormContainer));