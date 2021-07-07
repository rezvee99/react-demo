import React from 'react';
import classes from './Topbar.module.css'
const logo = "https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png";


function Topbar() {
    return (
        <nav className={classes.topbar}>
            <img src={logo} alt="Amazon Logo" />
        </nav>
    )
}

export default Topbar
