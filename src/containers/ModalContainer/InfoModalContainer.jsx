import React from 'react';
import PopupPizzaInfo from '../../components/PopupPizzaInfo/PopupPizzaInfo';
import { connect } from "react-redux"
import { toggleModal } from "../../store/actions/InfoModalAction";
import { addToCart } from "../../store/actions/OrderAction";
import { getToppingFromServer } from "../../store/actions/ToppingAction"

const InfoModalContainer = props => {

    const addToCart = (product) => {
        if (!props.token)
            props.history.push("./login");
        props.addToCart(product);
    }
    if (props.toppings.length === 0) {
        props.getTopping();
    }

    return (
        <PopupPizzaInfo
            toppings={props.toppings}
            isOpen={props.infoModal.isOpen}
            addToCart={addToCart}
            closeModal={props.closeModal}
            info={props.infoModal.info}
            history={props.history} />
    );
};

const mapStateToProps = state => ({
    infoModal: state.infoModal,
    toppings: state.toppings.toppings,
    token: state.user.token
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => {
        dispatch(toggleModal(false));
    },
    addToCart: (product) => {
        dispatch(addToCart(product))
    },
    getTopping: () => {
        dispatch(getToppingFromServer())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(InfoModalContainer);