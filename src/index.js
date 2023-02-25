import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import contacts from './components/additions/initialContacts.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialContacts={contacts} />
  </React.StrictMode>
);
