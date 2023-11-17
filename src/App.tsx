import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./page/onboarding/splashScreen.tsx";
import ProductTourOne from "./page/onboarding/productTourOne.tsx";
import ProductTourTwo from "./page/onboarding/productTourTwo.tsx";
import ProductTourThree from "./page/onboarding/productTourTwo.tsx";
import Error from "./page/error.tsx";

const queryCient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCient}>
      <div className="app">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="*" element={<Error />} />
          <Route path="/onboarding-tour-one" element={<ProductTourOne />} />
          <Route path="/onboarding-tour-two" element={<ProductTourTwo />} />
          <Route path="/onboarding-tour-three" element={<ProductTourThree />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
