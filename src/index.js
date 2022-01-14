import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App";
import {TodosProvider} from "./redux/store";

ReactDOM.render(
    <TodosProvider>
        <App />
    </TodosProvider>,
    document.getElementById('root')
);