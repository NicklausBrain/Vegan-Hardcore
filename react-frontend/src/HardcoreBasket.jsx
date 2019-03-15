import React from 'react';
import { HardcoreImagesUrl } from './Const';

const HardcoreBasket = (props) => {
    const sumUah = (a, b) => parseInt(a) + parseInt(b) + '₴';

    var mealGroups = props.meals.reduce((mealGroups, x) => {
        var mealGroup = Object.assign(mealGroups[x.title] || {}, x);
        mealGroup.amount = (mealGroup.amount || 0) + 1;
        mealGroup.groupPrice = sumUah((mealGroup.groupPrice || 0), x.price);
        mealGroups[x.title] = mealGroup;
        return mealGroups;
    }, {});

    mealGroups = Object.values(mealGroups);

    var basketItems = mealGroups.map((meal, key) => <HardcoreBasketItem {...meal} key={key} removeFromBasket={props.removeFromBasket} />);

    var totalPrice = mealGroups.reduce((totalPrice, mealGroup) => sumUah(totalPrice, mealGroup.groupPrice), 0);

    return (
        <div className="dropdown-menu dropdown-menu-right p-0 m-0 ">
            {basketItems}
            {basketItems.length ? (
                <div className="card">
                    <div className="card-body">
                        <small className="text-muted float-left">{totalPrice}</small>
                        <div className="btn-group float-right">
                            <button className="btn btn-danger mr-2" onClick={props.clearBasket}>Очистить</button>
                            <button className="btn btn-primary mr-2">Заказать</button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="card">
                        <div className="card-body">
                            <div className="col-md-12">КОРЗИНА ПУСТА</div>
                        </div>
                    </div>
                )}
        </div>
    );
};

const HardcoreBasketItem = (meal) => {
    const removeFromBasket = () => meal.removeFromBasket(meal.title);
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img className="img-responsive" src={HardcoreImagesUrl + meal.image} style={{ maxWidth: "128px", maxHeight: "128px" }} />
                    </div>
                    <div className="col-3" >{meal.title}</div>
                    <div className="col-1" >{meal.amount}</div>
                    <div className="col-2" >{meal.groupPrice}</div>
                    <div className="col-2" >
                        {/* make minus and cross */}
                        <button className="btn btn-danger float-right" onClick={removeFromBasket}>Убрать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HardcoreBasket;