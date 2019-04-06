import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import { store, persistor } from "./store";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
