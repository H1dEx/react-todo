import React from 'react';
import styles from './Layout.module.scss'
import Menu from "./Menu";
import Drawer from "./Drawer";

class Layout extends React.Component {
    state = {
        isMenuOpened: false
    }

    onToggleMenu = () => {
        console.log(this.state);
        this.setState((state) => ({
            isMenuOpened: !state.isMenuOpened
        }))
    }

    render() {
        return (
            <div className={styles.Layout}>
                <Menu opened={this.state.isMenuOpened} onToggleMenu={this.onToggleMenu}/>
                {this.state.isMenuOpened? <Drawer/> : null}
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;