import React from 'react';
import './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import logo from '../../../assets/logo.8bd79654.png';
import DrawerToggle from '../SideDrawer/MenuButton/MenuButton';
import useHooks from '../../UseHooks';

function Toolbar(props) {
    const show = useHooks();

    return (
        <header className={`toolbar ${show && 'toolbar_add'}`}>
            <img src={logo} className="toolbar_logo" alt="africanobservations_logo" />
            <nav>
                <NavigationItems />
            </nav>
                <DrawerToggle view={show} clicked={props.toggleButton} />
        </header>
    )
}

export default Toolbar;