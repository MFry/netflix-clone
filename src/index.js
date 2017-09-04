import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFontLoader.load({
  google: {
    families: ['Lato:100,300,400,500,700'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
