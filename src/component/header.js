import React, { Component } from 'react';
import '../styles/header.scss';
import buy_car_icon from '../assets/buyCar.svg'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <span id="title">Store</span>
        <div id="buy_car_item">
          <img src={buy_car_icon} id="buy_car" />
          <div id="amount"></div>
        </div>
      </div>
    );
  }
}

export default Header;