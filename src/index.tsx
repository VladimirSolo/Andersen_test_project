import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from "./app/providers/store";
import "./firebase";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </BrowserRouter>,
);
