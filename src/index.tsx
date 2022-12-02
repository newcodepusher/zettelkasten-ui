import "./pages/index"

import React from 'react';
import ReactDOM from 'react-dom/client';
import Graph from "./pages";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Graph/>
    </React.StrictMode>
);
