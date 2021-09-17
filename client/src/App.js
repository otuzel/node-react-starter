import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorBoundary from 'src/components/ErrorBoundary';
import Header from 'src/components/Header';
import NotFound from 'src/components/NotFound';
import Home from 'src/pages/Home';

import 'src/styles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <Header example={'yo'} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
