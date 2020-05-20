import React from 'react';
import styles from './Menu.module.scss'
const Menu = props => {
    return (
        <div className={`${styles.Menu} ${styles.active}`}>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

export default Menu;