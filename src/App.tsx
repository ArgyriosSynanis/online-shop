import React from 'react';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Page from './components/Page';
import Banner from './components/Header/Banner';
import RoutsWithLayout from './routes/RoutsWithLayout';
import Footer from './components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  persistQueryClient({
    queryClient,
    persister: localStoragePersister,
  });

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
};

export default App;
