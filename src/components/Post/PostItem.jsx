import React from 'react';
import styles from './PostItem.module.scss'
const PostItem = props => {
    return (
        <li className={styles.PostItem}>
            {props.value}
        </li>
    );
};

export default PostItem;