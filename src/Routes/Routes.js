import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import Home from "../Pages/Home/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/category/:id',
            //     element: <PrivateRoute><ProductCategory></ProductCategory></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://assignment-twelve-server-six.vercel.app/category/${params.id}`)
            // },
            
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/products',
                element: <Products></Products>
            },
        ]
    }
])

export default router;