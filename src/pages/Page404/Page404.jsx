import React from 'react';
import "./Page404.scss"
const Page404 = ({history}) => {
    return (
        <div className="page-not-found">
            <div className="liar"></div>
            <h1>404 - Not found</h1>
            <h2>We are sorry that the page you are looking does not exist</h2>
            <button onClick={()=>{history.push("/")}}>GO BACK TO HOME PAGE</button>
        </div>
    );
};

export default Page404;