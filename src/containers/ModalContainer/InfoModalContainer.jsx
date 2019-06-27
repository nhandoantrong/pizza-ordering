import React from 'react';
import PopupPizzaInfo from '../../components/PopupPizzaInfo/PopupPizzaInfo';
import { connect } from "react-redux"
import {toggleModal} from "../../store/actions/InfoModalAction"
const InfoModalContainer = props => {
    return (
        <PopupPizzaInfo isOpen={props.infoModal.isOpen} closeModal={props.closeModal} info={props.infoModal.info}/>
    );
};

const mapStateToProps = state => ({
    infoModal: state.infoModal
})

const mapDispatchToProps = dispatch =>({
    closeModal : () =>{
        dispatch(toggleModal(false));
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(InfoModalContainer);