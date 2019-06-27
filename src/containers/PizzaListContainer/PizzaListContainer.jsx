import React, { Fragment } from 'react';
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import { connect } from "react-redux";
import { toggleModal } from "../../store/actions/InfoModalAction"
import MediaQuery from 'react-responsive';
import { smallScreenWidth, mediumScreenWidth } from "../../util/screenWidthConstant"


const PizzaListContainer = ({ pizzaArray, openModal }) => {

    const renderPizzaList = pizzaArray.length ? pizzaArray.map((item, index) => {
        return <Fragment key={index}>
            <MediaQuery maxDeviceWidth={smallScreenWidth - 1}>
                <div className="col-12">
                    <PizzaItem item={item} openModal={openModal} />
                </div>

            </MediaQuery>
            <MediaQuery minDeviceWidth={smallScreenWidth} maxDeviceWidth={mediumScreenWidth - 1}>
                <div className="col-6">
                    <PizzaItem item={item} openModal={openModal} />
                </div>

            </MediaQuery>
            <MediaQuery minDeviceWidth={mediumScreenWidth}>
                <div className="col-4">
                    <PizzaItem item={item} openModal={openModal} />
                </div>
            </MediaQuery>
        </Fragment>
    }) : null

    return (
        <div className="row">
            {renderPizzaList}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    openModal: (info) => {
        dispatch(toggleModal(true, info))
    }
})


export default connect(null, mapDispatchToProps)(PizzaListContainer);