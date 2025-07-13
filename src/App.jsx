import './App.css';
import { AppRoutes } from './AppRoutes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
function App() {
  const queryClinet = new QueryClient();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppRoutes />
      </QueryClientProvider>
    </>
  );
}

export default App;
