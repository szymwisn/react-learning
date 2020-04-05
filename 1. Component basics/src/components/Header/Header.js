import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import Button from '../Button/Button';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.wrapper}>
                <h2>FavNote.</h2>
                <HeaderNavigation />
                <Button secondary>new item</Button>
            </header>
        );
    }
}

export default Header;