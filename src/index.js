import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from './redux/store';
const item = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    item,
    document.getElementById('root')
);
