import React from 'react';
import { withFormik, Field } from "formik";
import InputGroup from '../../../components/InputGroup/InputGroup';
import {changePasswordAPI} from "../../../services/UserServices";
import {fireLoading,fireSuccess,closeSwal,fireError} from "../../../util/AlertFiring";
import {wrongOldPassword} from "../../../util/errorMessageConstant"
const EditPassword = ({
    errors,
    touched,
    handleSubmit,
    handleReset,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="passwordOld" render={({ field }) => (
                <InputGroup field={field} type="password"
                    labelContent="Current Password"
                    error={errors.passwordOld}
                    touched={touched.passwordOld} />
            )} />
            <Field name="passwordNew" render={({ field }) => (
                <InputGroup field={field} type="password"
                    labelContent="New Password"
                    error={errors.passwordNew}
                    touched={touched.passwordNew} />
            )} />
            <Field name="rePasswordNew" render={({ field }) => (
                <InputGroup field={field} type="password"
                    labelContent="Conrfirm Password"
                    error={errors.rePasswordNew}
                    touched={touched.rePasswordNew} />
            )} />
            <div className="submit-line">
                <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                <button type="submit">CONFIRM</button>
            </div>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({ passwordOld: "", passwordNew: "", rePasswordNew: "" }),

    // Custom sync validation
    validate: values => {
        const { passwordOld, passwordNew, rePasswordNew } = values;
        const errors = {};
        if (!passwordOld) {
            errors.passwordOld = "Please provide password"
        }
        else if (passwordOld.length < 8) {
            errors.passwordOld = "Password is more than 8-digit long"
        }

        if (!passwordNew) {
            errors.passwordNew = "Please provide New"
        }
        else if (passwordNew.length < 8) {
            errors.passwordNew = "Password is more than 8-digit long"
        }

        if (passwordNew !== rePasswordNew) {
            errors.rePasswordNew = "Password does not match"
        }

        return errors
    },

    handleSubmit: (values, { props,resetForm,setErrors }) => {
        fireLoading("Validating Password")
        changePasswordAPI(values,props.token).then(res=>{
            if (res.data.status){
                fireSuccess("Password changed");
                resetForm();
            }
            else throw res.data.err
        }).catch(err=>{
            closeSwal()
            if (typeof err ==="string" && err ===wrongOldPassword)
            {
                
                setErrors({
                    passwordOld:"Wrong current password"
                })
            }
            else{
                fireError("Cannot change password")
            }
        })
    },

    displayName: 'ChangeNameForm',
})(EditPassword);