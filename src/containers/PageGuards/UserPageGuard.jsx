import React from 'react';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";

const UserPageGuard = ({user, Component, history}) => {
    return (
        <>
            {user.token ? <Component history={history}/> : <Redirect to="/" />}
        </>
    );
};

const mapStateToProps = state => ({
    user: state.user
})



export default connect(mapStateToProps)(UserPageGuard); 