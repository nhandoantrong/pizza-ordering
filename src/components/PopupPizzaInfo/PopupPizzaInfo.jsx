import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import "./PopupPizzaInfo.scss";

class PopupPizzaInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: {},
            size: "",
            type: ""
        }
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.info !== nextprops.info) {
            const { info } = nextprops;

            this.setState({
                choice: info.choices[0],
                size: info.choices[0].size,
                type: info.choices[0].type
            })
        }
    }

    handleOnChange = (event) => {
        const { info } = this.props
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.setState({
                choice: info.choices.find(item => item.size === this.state.size && item.type === this.state.type)
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
        const choices = this.props.info ? this.props.info.choices : null;
        if (choices)
            return [...new Set(choices.map(choice => choice[attr]))];
        return []
    }

    renderAttribute = (attr) => {
        return this.filterByAttribute(attr).map(choice => {
            return <option value={choice} key={choice}>{choice}</option>
        })
    }

    render() {
        const { isOpen, info } = this.props

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
                            <div className="submit-line">
                                <div className="price">
                                    <h3>Total price: ${this.state.choice.price}</h3>
                                </div>
                                <button onClick={() => {
                                    this.props.addToCart({
                                        product:
                                        {
                                            ...this.state.choice,
                                            name: info.name,
                                            picture: info.picture,
                                            _id: info._id
                                        }
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