import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import ProductDetail from './ProductDetail';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/admin',
        element: <Admin/>
    },
    {
        path: '/product/:productId',
        element: <ProductDetail/>
    }
])
export default router;