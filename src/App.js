import React, { Component } from 'react';
import data from './data';
import './App.css';

function MenuList({menuId, parentMenuId, onClick}) {
  return (
    <ul onClick={onClick} data-menu-id={menuId} data-parent-menu-id={parentMenuId}>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
    </ul>
  )
}

function menuItem(parent /* string id reference*/) {

}

function generateMenus(data) {
  data.globalNavigation.map()
}

class App extends Component {
  state = {
    activeMenuId: 0
  };

  handleMenuClick = (e) => {
    console.log('clicked');
  };

  render() {
    return (
      <div className="menu container">
        {/* {generateMenus(data)} */}
        <MenuList onClick={this.handleMenuClick} menuId="1" />
        <MenuList menuId="2" parentMenuId="1" />
        <MenuList menuId="3" parentMenuId="2"/>
      </div>
    );
  }
}

export default App;