import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./page/onboarding/splashScreen.tsx";
import Error from "./page/error.tsx";
import Tour from "./page/onboarding/tour.tsx";
import DesktopWarning from "./component/desktopWarning.tsx";

const queryCient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCient}>
      <div className="app bg-white">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="*" element={<Error />} />
          <Route path="/onboarding-tour-one" element={<Tour index={1} />} />
          <Route path="/onboarding-tour-two" element={<Tour index={2} />} />
          <Route path="/onboarding-tour-three" element={<Tour index={3} />} />
        </Routes>
        <DesktopWarning />
      </div>
    </QueryClientProvider>
  );
}

export default App;
