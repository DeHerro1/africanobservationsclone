import React from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <div>
            <Backdrop show={props.open} 
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')}>
            <p className="closedButton" onClick={props.closed}>X</p>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>

    )
}

export default sideDrawer;