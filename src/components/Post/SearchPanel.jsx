import React from 'react';
import styles from './SearchPanel.module.scss';

const SearchPanel = props => {
    return (
        <div className={styles.SearchPanel}>
            <input type="text" value="Type something for search"/>
            <button className={styles.button}>F</button>
            <button className={styles.button}>L</button>
        </div>
    );
};

export default SearchPanel;