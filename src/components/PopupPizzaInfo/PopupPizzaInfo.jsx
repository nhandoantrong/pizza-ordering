import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import "./PopupPizzaInfo.scss";
import ToppingList from './ToppingList/ToppingList';
import QuantityChange from '../QuantityChange/QuantityChange';

class PopupPizzaInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: {},
            size: "",
            type: "",
            toppingChoices: [],
            quantity: null,
        }
    }

    addTopping = (topping) => {
        this.setState({
            toppingChoices: [...this.state.toppingChoices, topping]
        })
    }
    removeTopping = (topping) => {

        const index = this.state.toppingChoices.findIndex(item => item._id === topping._id);
        const newToppingChoice = [...this.state.toppingChoices];
        newToppingChoice.splice(index, 1);
        if (index !== -1) {
            this.setState({
                toppingChoices: newToppingChoice
            })
        }

    }


    componentWillReceiveProps(nextprops) {
        if (this.props.info.name !== nextprops.info.name) {
            const { info } = nextprops;
            this.setState({
                choice: info.pricing[0],
                size: info.pricing[0].size,
                type: info.pricing[0].type,
                toppingChoices: [],
                quantity: 1
            })
        }
        else if (!this.props.isOpen && nextprops.isOpen) {
            const { info } = nextprops;
            this.setState({
                choice: info.pricing[0],
                size: info.pricing[0].size,
                type: info.pricing[0].type,
                toppingChoices: [],
                quantity: 1
            })
        }
    }

    changeQuantity = (number) => {
        this.setState({
            quantity: Math.max(this.state.quantity + number, 1)
        })
    }

    handleOnChange = (event) => {
        const { info } = this.props
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.setState({
                choice: info.pricing.find(item => item.size === this.state.size && item.type === this.state.type)
            }, () => {
                console.log(this.state.choice)
            }
            )
        }
        )
    }



    closeOnOverlayClick = () => {
        this.props.closeModal();
    }
    filterByAttribute = (attr) => {
        const pricing = this.props.info ? this.props.info.pricing : null;
        if (pricing)
            return [...new Set(pricing.map(choice => choice[attr]))];
        return []
    }

    renderAttribute = (attr) => {
        return this.filterByAttribute(attr).map(choice => {
            return <option value={choice} key={choice}>{choice}</option>
        })
    }

    render() {
        const { isOpen, info, toppings } = this.props;
        const toppingPrice = this.state.toppingChoices.reduce((previousValue, topping) => {
            return previousValue + topping.price
        }, 0)
        return (
            <Modal open={isOpen}
                onOverlayClick={this.closeOnOverlayClick}
                animationDuration={100}
                center={true}
                blockScroll={false}
                onClose={() => { this.props.closeModal() }}
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
                                    <select name="size" id="size" value={this.state.size} onChange={this.handleOnChange} >
                                        {this.renderAttribute("size")}
                                    </select>
                                </div>

                                <div className="selection">
                                    <label htmlFor="type">Crust Type:</label>
                                    <select name="type" id="type" value={this.state.type} onChange={this.handleOnChange}>
                                        {this.renderAttribute("type")}

                                    </select>
                                </div>
                            </div>
                            <ToppingList toppingList={toppings}
                                addTopping={this.addTopping}
                                removeTopping={this.removeTopping}
                            />
                            <div className="submit-line">
                                <QuantityChange quantity={this.state.quantity} changeQuantity={this.changeQuantity} />
                                <div className="price">
                                    <h3>Total price: ${this.state.quantity * (this.state.choice.price + toppingPrice)}</h3>
                                </div>
                                <button onClick={() => {
                                    this.props.addToCart({
                                        product:
                                        {
                                            ...this.state.choice,
                                            name: info.name,
                                            picture: info.picture,
                                            _id : info._id
                                        },
                                        toppingList: [...this.state.toppingChoices],
                                        quantity: this.state.quantity
                                    })
                                    this.props.closeModal();
                                }}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    };
};

export default PopupPizzaInfo;