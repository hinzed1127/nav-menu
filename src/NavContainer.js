import React from 'react';
import ListMenu from './ListMenu';
import './App.css';

export default class NavContainer extends React.Component {
    state = {
        activeList: 0
    };

    setSelectedId = (id) => {
        console.log("click", id);
        this.setState({
            activeList: id
        });
    }

    render() {
        const { menus } = this.props;

        return (
            <div className="menu container">
                {Object.keys(menus).map((menuId, idx) => (
                    <ListMenu
                        key={idx}
                        id={menuId}
                        data={menus[menuId]} 
                        activeList={this.state.activeList}
                        onClick={this.setSelectedId}
                    />
                ))}
            </div>
        )
    }


}