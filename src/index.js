import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './dux/store'
import { HashRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </HashRouter>
    
    , document.getElementById('root'));
// registerServiceWorker();
