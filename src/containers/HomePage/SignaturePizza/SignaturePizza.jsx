import React from 'react';
import "./SignaturePizza.scss"
import Slider from "react-slick"
import PizzaItem from './PizzaItem';

const SignaturePizza = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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

    const pizzaArray = [{
        name: "Chicken Supreme Pizza",
        img: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_large.jpg?v=1532430471"
    },
    {
        name: "Bella Italia Pizza",
        img: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product7_large.jpg?v=1532428956"

    },
    {
        name: "Chicken Supreme Pizza",
        img: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_large.jpg?v=1532430471"
    },
    {
        name: "Bella Italia Pizza",
        img: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product7_large.jpg?v=1532428956"

    },
    ]

    const renderPizzas = pizzaArray.map((item,index) =>(
        <PizzaItem item= {item} key={index}/>
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

export default SignaturePizza;