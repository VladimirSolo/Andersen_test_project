import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { LoginPage } from "pages/LoginPage";
import { SignUpPage } from "pages/SignUpPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "widgets/PageLoader";
import { ProtectedRoute } from "widgets/ProtectedRoute";
import { FavoritesPage } from "pages/FavoritesPage";
import { History } from "pages/History";
import { FilmDetails } from "shared/ui";
import { SearchPage } from "pages/SearchPage";

export default function AppRouter() {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              <Route element={<ProtectedRoute isAuthenticated={false} />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
              </Route>
              <Route element={<ProtectedRoute isAuthenticated />}>
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/history" element={<History />} />
              </Route>
              <Route path="/:id" element={<FilmDetails />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Suspense>
  );
}
