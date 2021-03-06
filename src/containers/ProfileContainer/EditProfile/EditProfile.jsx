import React from 'react';
import EditName from './EditName';
import {connect} from "react-redux";
import {changeNameOnServer} from "../../../store/actions/UserAction"
import EditPassword from './EditPassword';
const EditProfile = ({name,changeName,token}) => {
    return (
            <div className="user-entry">
                <div className="content">
                    <h3>EDIT NAME</h3>
                    <EditName name = {name} changeName={(name)=> changeName(name,token)}/>

                </div>
                <div className="content" style={{marginBottom:"15px"}}>
                    <h3>EDIT PASSWORD</h3>
                    <EditPassword token={token}/>
                    
                </div>
            </div>
    );
};

const mapStateToProps = (state) =>({
    name: state.user.user.name,
    token: state.user.token
})

const mapDisPatchToProps = dispatch =>({
    changeName : (name,token) => {
        dispatch(changeNameOnServer(name,token))
    }
})

export default connect(mapStateToProps,mapDisPatchToProps)(EditProfile);