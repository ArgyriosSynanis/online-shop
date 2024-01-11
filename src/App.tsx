import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Page from './components/Page';
import Banner from './components/Header/Banner';
import RoutsWithLayout from './routes/RoutsWithLayout';
import Footer from './components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Banner />
        <Page>
          <RoutsWithLayout />
        </Page>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
