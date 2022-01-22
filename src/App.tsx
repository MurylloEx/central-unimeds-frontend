import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routes';

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
