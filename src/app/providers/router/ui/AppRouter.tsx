import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { LoginPage } from "pages/LoginPage";
import { SignUpPage } from "pages/SignUpPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "widgets/PageLoader";
import { ProtectedRoute } from "widgets/ProtectedRoute";
import { Favorites } from "pages/Favorites";
import { History } from "pages/History";

export default function AppRouter() {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              <Route element={<ProtectedRoute isAuthenticated={false} />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
              </Route>
              <Route element={<ProtectedRoute isAuthenticated />}>
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/history" element={<History />} />
              </Route>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Suspense>
  );
}
