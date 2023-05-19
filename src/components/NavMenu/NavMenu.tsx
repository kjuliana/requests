import React from 'react';
import {NavLink, NavLinkProps} from "react-router-dom";
import styles from './NavMenu.module.css';

const Link = (props: NavLinkProps) => (
    <NavLink
        {...props}
        className={({isActive}) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
    />
);

const NavMenu = () => {
    return (
        <div className={styles.root}>
            <Link to='/get'>GET</Link>
            <Link to='/post'>POST</Link>
            <Link to='/delete'>DELETE</Link>
        </div>
    );
};

export default NavMenu;