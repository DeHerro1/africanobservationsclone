import React from 'react';
import './MenuButton.css';

const menuButton = (props) => (
    <div className="DrawerToggle" id={props.view && 'change_view'} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>

    </div>
);

export default menuButton;