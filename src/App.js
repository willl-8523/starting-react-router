import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/products', element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
