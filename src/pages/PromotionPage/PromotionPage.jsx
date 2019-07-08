import React from 'react';
import promoImage from "../../assets/img/promotion.jpg"
const PromotionPage = ({history}) => {
    return (
        <div>
            <div className="liar"></div>
            <img src={promoImage} alt="promotion"  
            style={{display:"block",width:"100%", height:"calc(100vh - 110px)", cursor:"pointer"}}
            onClick={()=>history.push("/menu")} />
        </div>
    );
};

export default PromotionPage;