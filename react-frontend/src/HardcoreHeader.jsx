import React, { Component } from 'react';
import $ from "jquery";
import HardcoreBasket from './HardcoreBasket';

class HardcoreHeader extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        $('.dropdown-toggle').on('click', function (e) {
            $(this).next().toggle();
        });
        $('.dropdown-menu.keep-open').on('click', function (e) {
            e.stopPropagation();
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">#НИКОГО НЕ ЕМ</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Поварёнок Костя</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Хардкор</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Контакты</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link dropdown-toggle text-uppercase" data-toggle="dropdown" href="#">
                                Корзина
                                &nbsp;
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                            <HardcoreBasket
                                meals={this.props.meals}
                                clearBasket={this.props.clearBasket}
                                removeFromBasket={this.props.removeFromBasket} />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default HardcoreHeader;