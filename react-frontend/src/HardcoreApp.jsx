import React, { Component } from 'react';
import axios from 'axios';
import {HardcoreMenu} from './HardcoreMenu';
import {HardcoreDataUrl} from './Const';
import HardcoreHeader from './HardcoreHeader';

class HardcoreApp extends Component {

    constructor() {
        super();

        const updateState = (diff) => this.setState((state) => {
            return Object.assign(state, diff);
        });

        this.state = {
            meals: [],
            basket: [],
            init: async () => updateState({
                meals: (await axios.get(HardcoreDataUrl)).data
            }),
            order: (meal) => updateState({
                basket: this.state.basket.concat(meal)
            }),
            clearBasket: () => updateState({
                basket: []
            }),
            removeFromBasket: (mealTitle) => updateState({
                basket: this.state.basket.reduce((basket, meal) => {
                    if (meal.title !== mealTitle || basket.found) {
                        basket.push(meal);
                        return basket;
                    }
                    basket.found = true;
                    return basket;
                }, [])
            })
        };
    }

    componentWillMount = async () => await this.state.init();

    render() {
        return (
            <div>
                <header>
                    <HardcoreHeader
                        meals={this.state.basket}
                        clearBasket={this.state.clearBasket}
                        removeFromBasket={this.state.removeFromBasket} />
                </header>
                <main role="main">
                <HardcoreMenu
                        meals={this.state.meals}
                        order={this.state.order} />
                </main>
                <footer className="text-center">
                    <p>© 2018 НИКОГО НЕ ЕМ</p>
                </footer>
            </div>);
    }
}

export default HardcoreApp;