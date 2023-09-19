import { Navbar } from "widgets/Navbar";
import { useAuthCheck } from "widgets/lib";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  useAuthCheck();

  return (
      <div className="app">
          <Navbar />
          <AppRouter />
      </div>
  );
};

export default App;
