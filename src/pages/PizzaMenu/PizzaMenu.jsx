import React, { Component } from 'react';
import "./PizzaMenu.scss";
import PizzaListContainer from '../../containers/PizzaListContainer/PizzaListContainer';

import { connect } from "react-redux"
import { getCategoryFromServer } from "../../store/actions/CategoryAction";
import { filterProduct } from './FilterProduct';
import { getToppingFromServer } from "../../store/actions/ToppingAction"
class PizzaMenu extends Component {
    state = {
        currentTypeIndex: 0,
        categories: []
    }

    componentDidMount() {
        if (this.props.categories.length === 0)
            this.props.getCategoryFromServer();
        else this.setState({
            categories: this.props.categories
        })
        if (this.props.toppings.length === 0)
            this.props.getToppingFromServer();
        else this.setState({
            toppings: this.props.toppings
        })

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            categories: nextProps.categories
        })
    }


    renderCategoryName = () => {
        return this.state.categories.map((categories, index) => {
            return <h3 key={categories._id} onClick={() => { this.handleChangeCategories(index) }} >{categories.name}</h3>
        })
    }

    handleChangeCategories = (index) => {
        this.setState({
            currentTypeIndex: index
        })
    }

    renderPizzaList = () => {
        const { categories, currentTypeIndex } = this.state;

        if (categories.length === 0)
            return null
        const fullArray = categories[currentTypeIndex].productID;
        const pizzaArray = filterProduct(fullArray);
        return <PizzaListContainer pizzaArray={pizzaArray} />
    }


    render() {
        return (
            <div className="pizza-menu">
                <div className="liar"></div>
                <div className="container">
                    <h1>Pizza Menu</h1>
                    <div className="group-type">
                        {this.renderCategoryName()}
                    </div>
                    <div className="pizza-menu-list">
                        {this.renderPizzaList()}
                    </div>
                </div>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    categories: state.categories.categories,
    toppings: state.toppings.toppings
})

const mapDispatchToProps = dispatch => ({
    getCategoryFromServer: () => {
        dispatch(getCategoryFromServer());
    },
    getToppingFromServer: () => {
        dispatch(getToppingFromServer())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMenu);