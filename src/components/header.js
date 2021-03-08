import React, { Component } from 'react';
import User from '../icons/user.svg';
import ArrowDownBlack from '../icons/arrow-down-black.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-title">MODULE TITLE</div>

                <div className="user-profile">
                    <div className="user-icon">
                        <img src={User} alt="icon" />
                    </div>
                    <div className="arrow-down-black">
                        <img src={ArrowDownBlack} alt="icon" />
                    </div>
                </div>
            </header>
        )
    }
}
