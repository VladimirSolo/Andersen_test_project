import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;