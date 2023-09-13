import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import './index.scss'
import { AboutLazy } from './About/AboutLazy';
import { MainLazy } from './Main/MainLazy';

const App = () => {
    return (
        <div className="app">
          <Link to={'./'}>Main</Link>
          <Link to={'./about'}>About</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainLazy/>}/>
                <Route path={'/about'} element={<AboutLazy/>}/>
            </Routes>
          </Suspense>
        </div>
    );
};

export default App;