import React from 'react';
import userImage from "../../assets/img/default-user-image.png";
import "./ProfilePage.scss";
import {connect} from "react-redux"
import EditProfile from '../../containers/ProfileContainer/EditProfile/EditProfile';
const ProfilePage = ({name}) => {
    return (
        <div className="container profile-page">
            <div className="liar"></div>
            <div className="row">
                <div className="user-menu" >
                    <div className="image">
                        <img src={userImage} alt="" />
                        <div>{name}</div>
                    </div>
                    <div className="user-action">
                        <div className="action">Change Infomation</div>

                    </div>
                </div>
                <div className="showing-content">
                    <EditProfile /> 
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = state =>({
    name : state.user.user.name
})

export default connect(mapStateToProps)(ProfilePage);