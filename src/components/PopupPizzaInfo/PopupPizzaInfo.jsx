import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import "./PopupPizzaInfo.scss";

const PopupPizzaInfo = ({
    isOpen = false,
    info = {},
    closeModal = () => { }
}) => {
    const closeOnOverlayClick = () => {
        closeModal();
    }

    

    const { choices } = info;


    const filterByAttribute = (attr) => {
        if (choices)
            return [...new Set(choices.map(choice => choice[attr]))];
        return []
    }

    const renderAttribute = (attr) => {
        return filterByAttribute(attr).map(choice => {
            return <option value={choice} key={choice}>{choice}</option>
        })
    }

    return (

        <Modal open={isOpen}
            onOverlayClick={closeOnOverlayClick}
            animationDuration={100}
            center={true}
            blockScroll={false}
            onClose={() => { closeModal() }}
            styles={{ closeButton: { cursor: "pointer" } }}
        >
            <div className="modal-content">
                <h1>{info.name}</h1>
                <div className="pizza-info">
                    <div className="pizza-pic">
                        <img src={info.picture} alt="" />
                    </div>
                    <div className="info-content">
                        <p>{info.detail}</p>
                        <div className="choice">
                            <div className="selection">
                                <label htmlFor="size">Size: </label>
                                <select name="size" id="size"  >
                                    {renderAttribute("size")}
                                </select>
                            </div>

                            <div className="selection">
                                <label htmlFor="crust">Crust Type:</label>
                                <select name="crust" id="crust">
                                    {renderAttribute("type")}

                                </select>
                            </div>
                        </div>
                        <div className="submit-line">
                            <div className="price">
                            </div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PopupPizzaInfo;