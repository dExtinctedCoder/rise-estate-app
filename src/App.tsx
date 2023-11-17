import { QueryClient, QueryClientProvider } from "react-query";

const queryCient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCient}>
      <div className="app">Rise Real Estate App</div>
    </QueryClientProvider>
  );
}

export default App;
