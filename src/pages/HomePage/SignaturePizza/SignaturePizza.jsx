import React from 'react';
import "./SignaturePizza.scss"
import Slider from "react-slick"
import PizzaItem from '../../../components/PizzaItem/PizzaItem';
import {toggleModal} from "../../../store/actions/InfoModalAction";
import {connect} from "react-redux";
import {getBestSellerFromServer} from "../../../store/actions/BestSellerAction"

const SignaturePizza = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                  arrows: false,
                  centerMode: true,
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 786,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },

          ]
    };

    const pizzaArray = props.bestSellerPizzas;
    if (pizzaArray.length===0){
        props.getBestSeller()
    }
    const renderPizzas = pizzaArray.map((item,index) =>(
        <PizzaItem item= {item} key={index} openModal={props.toggleModal}/>
    ))

    return (
        <div className="signature-pizza">
            <h1>Signature Pizzas</h1>
            <Slider {...settings}>
                {renderPizzas}

            </Slider>
        </div>
    );
};

const mapStateToProps = state =>({
    bestSellerPizzas: state.bestSeller.bestSellerPizzas
})


const mapDispatchToProps = dispatch =>({
    toggleModal: (info) =>{
        dispatch(toggleModal(true,info));
    },
    getBestSeller: () =>{
        dispatch(getBestSellerFromServer());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(SignaturePizza);