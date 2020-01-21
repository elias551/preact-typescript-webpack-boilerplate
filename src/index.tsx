import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
if (!root) {
    throw new Error('no root found');
}
ReactDOM.render(<App />, root);
