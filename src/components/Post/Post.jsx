import React, {Component} from 'react';
import styles from './Post.module.scss';
import SearchPanel from "./SearchPanel";
import PostItem from "./PostItem";

class Post extends Component {
    render() {
        return (
            <div className={styles.Post}>
                <h1>Post header</h1>
                <SearchPanel/>
                <ul>
                    <PostItem value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
                    <PostItem value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
                    <PostItem value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
                    <PostItem value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
                    <button className={styles.add_btn}>+ Add one more note</button>
                </ul>
            </div>
        );
    }
}

export default Post;