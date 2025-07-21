import { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="text-center py-6">
                <Loading />
              </div>
            }
          >
            <AppRouter />
          </Suspense>
        </ErrorBoundary>
      </div>
    </AuthProvider>
  );
}

export default App;
