import React, {Component} from 'react';
import styles from './Post.module.scss';
import SearchPanel from "./SearchPanel";
import PostItem from "./PostItem";
import {connect} from 'react-redux';
import {addPost, deletePost} from "../../redux/actions";

class Post extends Component {
    state = {
        term: '',
        filter: '',
        addMode: false,
        newContent: ''
    }

    search = (posts) => posts.filter(item => item.content.includes(this.state.term)) || posts;

    filter = (posts) => {
        switch (this.state.filter) {
            case "LIKED":
                return posts.filter(item => item.liked);
            case "IMPORTANT":
                return posts.filter(item => item.important);
            default:
                return posts;
        }
    }

    onAddToggle = (bool) => {
        this.setState({addMode: bool});
    }

    onToggleFilter = (filter) => {
        if (this.state.filter !== filter)
            this.setState({filter})
        else this.setState({filter: ''})
    }

    onToggleInput = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onChange= (e) => {
        this.setState({
            newContent: e.target.value
        })
    }

    onAddPost = () => {
        this.props.addPost(this.state.newContent);
        this.setState({
            newContent: '',
            addMode: false,
        })
    }

    render() {
        const posts = this.filter(this.search(this.props.posts));
        return (
            <div className={styles.Post}>
                <h1>Post header</h1>
                <SearchPanel term={this.state.term} onInputHandler={this.onToggleInput}
                             onToggleFilter={this.onToggleFilter}/>
                <ul>
                    {posts.map(item => (
                            <PostItem content={item.content}/>
                        )
                    )}
                    {this.state.addMode
                        ? (<div>
                                <textarea placeholder="Add text for new card" rows="4" autoFocus={true} value={this.state.newContent} onChange={this.onChange}/>
                                <div className={styles.add_buttons}>
                                    <button className={styles.add_submit} onClick={this.onAddPost}>Add card</button>
                                    <button className={styles.add_close} onClick={()=>this.onAddToggle(false)}>
                                        <span/>
                                        <span/>
                                    </button>
                                </div>
                            </div>
                        )
                        : <button className={styles.add_btn} onClick={()=>this.onAddToggle(true)}>+ Add one more note</button>
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})


export default connect(mapStateToProps, {addPost, deletePost})(Post);