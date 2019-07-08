import React from 'react';
import EditProfile from './EditProfile/EditProfile';
import CheckOrders from './CheckOrders/CheckOrders';

const ProfileContainer = ({status}) => {
    return (
        <div>
            {status===0? <EditProfile />: <CheckOrders />}
        </div>
    );
};

export default ProfileContainer;