import React, { Component } from 'react';
import Header from './header';
import SearchBar from './search-bar';
import MainPanel from './main-panel';

export default class RightPanel extends Component {
    render() {
        return (
            <div className="right-panel">
                <Header />
                <SearchBar />
                <MainPanel />
            </div>
        )
    }
}
