import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => (
    <div className="app">
        <Navbar />
        <AppRouter />
    </div>
);

export default App;
