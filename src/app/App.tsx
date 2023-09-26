import { Navbar } from "widgets/Navbar";
import { useAuthCheck } from "widgets/lib";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { FeatureTelegramProvider } from "./providers/FeatureTelegramProvider";

const App = () => {
  useAuthCheck();

  return (
      <div className="app">
          <FeatureTelegramProvider>
              <Navbar />
              <AppRouter />
          </FeatureTelegramProvider>
      </div>
  );
};

export default App;
