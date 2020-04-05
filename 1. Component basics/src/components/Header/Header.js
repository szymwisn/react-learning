import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.wrapper}>
                <h2>FavNote.</h2>
                <HeaderNavigation />
                <Button onClick={this.props.openModalFn} secondary>new item</Button>
            </header>
        );
    }
}

Header.propTypes = {
    openModalFn: PropTypes.func.isRequired
}

export default Header;