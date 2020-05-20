import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

const item = (<React.StrictMode>
        <App/>
    </React.StrictMode>);

ReactDOM.render(
    item,
    document.getElementById('root')
);
