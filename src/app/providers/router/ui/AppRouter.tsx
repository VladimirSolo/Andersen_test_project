import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { LoginPage } from "pages/LoginPage";
import { SignUpPage } from "pages/SignUpPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "widgets/PageLoader";

export default function AppRouter() {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Suspense>
  );
}
