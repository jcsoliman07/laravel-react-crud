import "../css/app.css";

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
);