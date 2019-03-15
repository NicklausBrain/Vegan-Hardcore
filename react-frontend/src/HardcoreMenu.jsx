import React from 'react';
import { HardcoreImagesUrl } from './Const';

const HardcoreMenu = (props) => {
    var menuItems = props.meals.map((meal, key) => <HardcoreMenuItem {...meal} key={key} id={key} order={() => props.order(meal)} />);
    return (
        <div className="container">
            <div className="row">
                <div className="card-columns ">{menuItems}</div>
            </div>
        </div>);
};

const HardcoreMenuItem = (meal) => {
    return (
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={HardcoreImagesUrl + meal.image} style={{ maxWidth: "480px", maxHeight: "320px" }} />
            <div className="card-body ">
                <h5 className="card-title m-0 text-uppercase">
                    <button className="btn btn-link collapsed p-0" data-toggle="collapse" data-target={"#mealdescription" + meal.id}>
                        {meal.title}
                    </button>
                </h5>
                <div id={"mealdescription" + meal.id} className="collapse card-text" data-parent="#accordion">
                    {meal.description}
                </div>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{meal.price}</small>
                    <button type="button" className="btn btn-primary" onClick={meal.order}>Беру</button>
                </div>
            </div>
        </div>
    );
};

export { HardcoreMenu, HardcoreMenuItem };