import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { Login } from "pages/Login";
import { NotFoundPage } from "pages/NotFoundPage";

export default function AppRouter() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Suspense>
  );
}
