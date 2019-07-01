import React from 'react';
import RegisterFormContainer from '../../containers/RegisterFormContainer/RegisterFormContainer';

const RegisterPage = () => {
    return (
        <div className="user-entry">
            <div className="liar"></div>
            <div className="content">
                <h1>Register</h1>
                <RegisterFormContainer />
            </div>

        </div>
    );
};

export default RegisterPage;