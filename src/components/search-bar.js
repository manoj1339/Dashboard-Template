import React, { Component } from 'react';
import Magnify from '../icons/magnifying-glass.svg';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <button>
                    + Add New
                </button>

                <div className="search"> 
                    <input type="text" placeholder="Search here.." />
                    <button>
                        <img src={Magnify} alt="icon" />
                    </button>
                </div>
            </div>
        )
    }
}
