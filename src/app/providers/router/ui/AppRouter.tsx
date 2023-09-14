import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from 'pages/Main';
import { Login } from 'pages/Login';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    </Suspense>
  );
}
