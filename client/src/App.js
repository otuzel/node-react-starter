import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import ErrorBoundary from 'src/components/ErrorBoundary';
import Header from 'src/components/Header';
import NotFound from 'src/components/NotFound';
import Home from 'src/pages/Home';

import 'antd/dist/antd.min.css';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  color: #222;
  font-family: sans-serif;
  margin: 0px;
  padding: 0px;
}

section {
  border: 1px solid #bbb;
  padding: 20px;
  margin-bottom: 20px;
}
`;

const $Page = styled.div`
  padding: 40px 20px;
  max-width: 1280px;
  margin: 0 auto;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <ErrorBoundary>
          <$Page>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </$Page>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
