import React from 'react';
import Post from "./components/Post/Post";
import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div className={styles.App}>
            <Layout>
                <Post/>
            </Layout>
        </div>
    );
}

export default App;
