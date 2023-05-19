import React from 'react';
import NavMenu from "../NavMenu/NavMenu";
import {Outlet} from "react-router-dom";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.root}>
            <NavMenu/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;