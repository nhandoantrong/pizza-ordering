import React from 'react';
import "./HomePage.scss";
import { Link as ScrollLink } from "react-scroll"
import SignaturePizza from './SignaturePizza/SignaturePizza';

const HomePage = props => {

    const handleChangePage = (page) =>{
        props.history.push(page);
        window.scrollTo(0,0);
    }

    return (
        <section className="home-page">
            <div className="carousel">
                <div className="curtain"></div>
                <div className="content">
                    <h1>TASTE THE MYTH</h1>
                    <h2>Try and stop at just one slice.</h2>
                    <button onClick={()=>handleChangePage("/menu")}>GET YOUR PIZZA NOW</button>
                </div>
                <div className="scroll-down">
                    <ScrollLink to="home-welcome" spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}>
                        <i className="fas fa-angle-down"></i>

                    </ScrollLink>
                </div>
            </div>
            <div className="welcome" id="home-welcome">
                <div className="container">
                    <div className="image">
                        <img src="https://cdn.shopify.com/s/files/1/0046/1615/9347/files/img-2-1_f9d9c1ea-6498-4a74-b296-170579b04929_768X.jpg?v=1533622354" alt="" />
                    </div>
                    <div className="welcome-content">
                        <h1>Welcome to Dev's Pizza</h1>
                        <p>Our chefs are working 24/7 and are ready to accept visitors and at any time of the day and night
                    </p>
                        <button onClick={()=>handleChangePage("/menu")} >View all of the pizza</button>
                    </div>
                </div>
            </div>

            <SignaturePizza />
        </section>
    );
};

export default HomePage;