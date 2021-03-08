import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div className="pagination">
                {this.props.content}
            </div>
        )
    }
}
