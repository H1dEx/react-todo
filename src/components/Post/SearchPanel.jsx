import React from 'react';
import styles from './SearchPanel.module.scss';

const SearchPanel = props => {
    return (
        <div className={styles.SearchPanel}>
            <input type="text" value={props.term} onChange={props.onInputHandler} placeholder="Search"/>
            <button className={styles.button} onClick={()=>props.onToggleFilter("IMPORTANT")}>I</button>
            <button className={styles.button} onClick={()=>props.onToggleFilter("LIKED")}>L</button>
        </div>
    );
};

export default SearchPanel;