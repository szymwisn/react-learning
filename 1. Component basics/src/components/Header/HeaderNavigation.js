import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

class HeaderNavigation extends React.Component {
    render() {
        return (
            <nav>
                <ul className={styles.wrapper}>
                    <li className={styles.navItem}>
                        <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/">twitters</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/articles">articles</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/notes">notes</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default HeaderNavigation;