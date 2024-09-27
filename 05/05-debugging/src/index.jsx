import ReactDOM from 'react-dom/client';
import {StrictMode} from "react";

import App from './App.jsx';
import './index.css';

// Strict Mode usually starts here, but also can be used around any component within the app
// it does some checks and warnings to help you write better code for example execute every function code twice
// do not commit this in production since it will slow down the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
