import React, { Component } from 'react';
import Edit from '../icons/edit.svg';
import Delete from '../icons/delete.svg';

export default class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.serial}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.email}</td>
                <td>{this.props.language}</td>
                <td>
                    <img src={Edit} alt="icon" />
                    <img src={Delete} alt="icon" />
                </td>
            </tr>
        )
    }
}
