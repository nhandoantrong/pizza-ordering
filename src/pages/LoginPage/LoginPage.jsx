import React from 'react';
import LoginFormContainer from '../../containers/LoginFormContainer/LoginFormContainer';

const LoginPage = () => {
    return (
        <div className="user-entry">
            <div className="liar"></div>
            <div className="content">
                <h1>Login</h1>
                <LoginFormContainer />
            </div>
        </div>
    );
};

export default LoginPage;