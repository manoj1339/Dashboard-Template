import React, { Component } from 'react';
import NavItem from './nav-item';

import Dashboard from '../icons/dashboard.svg';
import User from '../icons/user.svg';
import Email from '../icons/email.svg';
import Chart from '../icons/pie-chart.svg';
import GoogleDocs from '../icons/google-docs.svg';
import CloudData from '../icons/cloud-data.svg';
import Statistics from '../icons/statistics.svg';
import Image from '../icons/image.svg';
import WebCrawler from '../icons/web-crawler.svg';
import Notification from '../icons/notification.svg';
import Test from '../icons/test.svg';


export default class LeftPanel extends Component {
    render() {
        return (
            <div className="left-panel">
                <div className="logo">
                    <span>LOGO</span>
                </div>
                <NavItem title="Dashboard" icon={Dashboard} />
                <NavItem title="Title" icon={User} />
                <NavItem title="Title" icon={Email} />
                <NavItem title="Title" icon={Statistics} />
                <NavItem title="Title" icon={Test} />
                <NavItem title="Title" icon={GoogleDocs} />
                <NavItem title="Title" icon={Image} />
                <NavItem title="Title" icon={WebCrawler} />
                <NavItem title="Title" icon={Notification} />
                <NavItem title="Title" icon={CloudData} />
                <NavItem title="Title" icon={Chart} />
            </div>
        )
    }
}
