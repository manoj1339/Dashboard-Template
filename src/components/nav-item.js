import React, { Component } from 'react';
import ArrowDown from '../icons/arrow-down.svg';

export default class NavItem extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="nav-item">
                <div>
                    <img src={this.props.icon} alt="icon" />
                    { this.props.title }
                </div>
                <img src={ArrowDown} alt="icon" />
            </div>
        );
    }
}

