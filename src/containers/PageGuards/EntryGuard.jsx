import React from 'react';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
const EntryGuard = ({ user, Component }) => {
    return (
        <>
            {!user.token ? <Component /> : <Redirect to="/" />}
        </>
    )
};

const mapStateToProps = state => ({
    user: state.user
})



export default connect(mapStateToProps)(EntryGuard); 