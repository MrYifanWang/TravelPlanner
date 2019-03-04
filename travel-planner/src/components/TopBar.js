import React from 'react';
import logo from '../assets/images/pin.jpg';
import { Icon } from 'antd';

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">Travel Planner</div>
                {this.props.isLoggedIn ?
                    <div className="logout" onClick={this.props.handleLogout}>
                        <Icon type="logout" />{' '}Logout
                    </div> : null}
            </header>
        );
    }
}