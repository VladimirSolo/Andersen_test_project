import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from 'pages/Main';
import { About } from 'pages/About';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/about'} element={<About/>}/>
    </Routes>
  </Suspense>

  );
}
