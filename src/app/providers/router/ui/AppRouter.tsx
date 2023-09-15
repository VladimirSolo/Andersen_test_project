import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { Login } from "pages/Login";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "widgets/PageLoader";

export default function AppRouter() {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Suspense>
  );
}
