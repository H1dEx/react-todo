import React from 'react';
import styles from './Layout.module.scss'
import Menu from "./Menu";
const Layout = props => {
    return (
        <div className={styles.Layout}>
            <Menu/>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;