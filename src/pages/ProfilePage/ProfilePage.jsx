import React, { useState } from 'react';
import userImage from "../../assets/img/default-user-image.png";
import "./ProfilePage.scss";
import { connect } from "react-redux"
import ProfileContainer from '../../containers/ProfileContainer/ProfileContainer';
const ProfilePage = ({ name }) => {
    const [status, setStatus] = useState(0);

    return (
        <div className="container profile-page">
            <div className="liar"></div>
            <div className="user-navbar">
                <div className={`action ${status === 0 ? "active" : ""}`} onClick={() => { setStatus(0) }}>Change Infomation</div>
                <div className={`action ${status === 1 ? "active" : ""}`} onClick={() => { setStatus(1) }}>Check Orders</div>

            </div>
            <div className="row">
                <div className="user-menu" >
                    <div className="image">
                        <img src={userImage} alt="" />
                        <div>{name}</div>
                    </div>
                    <div className="user-action">
                        <div className={`action ${status===0? "active" : ""}`} onClick={() => { setStatus(0) }}>Change Infomation</div>
                        <div className={`action ${status===1? "active" : ""}`} onClick={() => { setStatus(1) }}>Check Orders</div>

                    </div>
                </div>

                <div className="showing-content">
                    <ProfileContainer status={status} />
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    name: state.user.user.name
})

export default connect(mapStateToProps)(ProfilePage);