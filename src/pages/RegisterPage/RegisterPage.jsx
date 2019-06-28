import React from 'react';
import LoginFormContainer from '../../containers/RegisterFormContainer/RegisterFormContainer';

const LoginPage = () => {
    return (
        <div className="user-entry">
            <div className="liar"></div>
            <div className="content">
                <h1>Register</h1>
                <LoginFormContainer />
            </div>

        </div>
    );
};

export default LoginPage;