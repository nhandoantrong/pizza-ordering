import React from 'react';
import PopupPizzaInfo from '../../components/PopupPizzaInfo/PopupPizzaInfo';
import { connect } from "react-redux"
import { toggleModal } from "../../store/actions/InfoModalAction";
import { addToCart } from "../../store/actions/OrderAction"
const InfoModalContainer = props => {
    return (
        <PopupPizzaInfo
            toppings={props.toppings}
            isOpen={props.infoModal.isOpen}
            addToCart={props.addToCart}
            closeModal={props.closeModal}
            info={props.infoModal.info} />
    );
};

const mapStateToProps = state => ({
    infoModal: state.infoModal,
    toppings: state.toppings.toppings
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(toggleModal(false));
    },
    addToCart: (product) => {
        dispatch(addToCart(product))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(InfoModalContainer);