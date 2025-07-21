import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import MainLayout from "../components/layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        }
      />

      <Route
        path="/"
        element={
          user ? (
            <MainLayout>
              <Home />
            </MainLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="*"
        element={<Navigate to={user ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
