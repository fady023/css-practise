import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import { store } from "./Components/Redux/store"
import {Provider} from "react-redux"
const root = reactDOM.createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>


);
