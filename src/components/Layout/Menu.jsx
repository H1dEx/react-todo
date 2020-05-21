import React from 'react';
import styles from './Menu.module.scss'
const Menu = props => {
    const clazz = (props.opened)? `${styles.Menu} ${styles.active}` : `${styles.Menu}`
    return (
        <div className={clazz} onClick={props.onToggleMenu}>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

export default Menu;