import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const SplashScreen = lazy(() => import("./page/onboarding/splashScreen.tsx"));
const Error = lazy(() => import("./page/error.tsx"));
const Loading = lazy(() => import("./page/loading.tsx"));
const Tour = lazy(() => import("./page/onboarding/tour.tsx"));
const DesktopWarning = lazy(() => import("./component/desktopWarning.tsx"));
const LoginOption = lazy(() => import("./page/authentication/loginOption.tsx"));
const LoginForm = lazy(() => import("./page/authentication/loginForm.tsx"));
const LoginFaq = lazy(() => import("./page/authentication/loginFaq.tsx"));

const queryCient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCient}>
      <div className="app bg-white">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="*" element={<Error />} />
            <Route path="/onboarding-tour-one" element={<Tour index={1} />} />
            <Route path="/onboarding-tour-two" element={<Tour index={2} />} />
            <Route path="/onboarding-tour-three" element={<Tour index={3} />} />
            <Route path="/login" Component={LoginOption}>
              <Route path="option" Component={LoginOption} />
              <Route path="form" Component={LoginForm} />
              <Route path="faqs" Component={LoginFaq} />
            </Route>
          </Routes>
          <DesktopWarning />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
