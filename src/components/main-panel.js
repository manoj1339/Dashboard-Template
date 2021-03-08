import React, { Component } from 'react';
import Row from './row';
import Pagination from './pagination';

export default class MainPanel extends Component {
    render() {
        return (
            <div className="main-panel">
                <table>

                    <colgroup>
                        <col span="1" style={{width: "6%"}} />
                        <col span="1" style={{width: "16%"}} />
                        <col span="1" style={{width: "18%"}} />
                        <col span="1" style={{width: "35%"}} />
                        <col span="1" style={{width: "15%"}} />
                        <col span="1" style={{width: "10%"}} />
                    </colgroup>

                    <tr className="table-header">
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th></th>
                    </tr>

                    <Row serial="01" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="02" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="03" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="04" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="05" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="06" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="07" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="08" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="09" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="10" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="11" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />
                    <Row serial="12" firstname="John" lastname="Doe" email="johndoe@email.com" language="English" />

                </table>

                <div className="table-footer">
                    <Pagination content="<" />
                    <Pagination content="1" />
                    <Pagination content="2" />
                    <Pagination content=">" />
                </div>
            </div>
        )
    }
}
