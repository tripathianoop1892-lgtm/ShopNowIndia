import { createBrowserRouter } from "react-router-dom";

// Components
import Cart from "../components/Card/Card";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Dashboard Pages
import Customer from "../pages/dashboard/Customer.jsx";
import Distributor from "../pages/dashboard/Distributor.jsx";
import Shopkeeper from "../pages/dashboard/Shopkeeper.jsx";

// Medicine List 
import MedicineList from "../pages/medicine-list/Distributor.jsx";

// Add Medicine
import AddMedicine from "../pages/add-medicine/Distributor";
// Order
import DistributorOrder from "../pages/order/Distributor.jsx";
// Stock
import DistributorStock from "../pages/stock/Distributor.jsx";
// Layouts
import CustomerLayout from "../components/Layout/CustomerLayout";
import DistributorLayout from "../components/Layout/DistributorLayout";
import ShopkeeperLayout from "../components/Layout/ShopkeeperLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },

  // Customer
  {
    path: "/customer",
    element: (
      <CustomerLayout>
        <Customer />
      </CustomerLayout>
    ),
  },

  // Cart
  {
    path: "/cart",
    element: (
      <CustomerLayout>
        <Cart />
      </CustomerLayout>
    ),
  },

  // Shopkeeper
  {
    path: "/shopkeeper",
    element: (
      <ShopkeeperLayout>
        <Shopkeeper />
      </ShopkeeperLayout>
    ),
  },

  // Distributor Dashboard
  {
    path: "/distributor",
    element: (
      <DistributorLayout>
        <Distributor />
      </DistributorLayout>
    ),
  },
// Medicine list
 {
  path: "/",
  element: <DistributorLayout />,
  children: [
    {
      path: "medicine-list",
      element: <Distributor />,
    }
  ]
},

  // Add Medicine
  {
    path: "/add-medicine",
    element: (
      <DistributorLayout>
        <AddMedicine />
      </DistributorLayout>
    ),
  },
  // Order Distributor
  {
  path: "/orders",
  element: (
    <DistributorLayout>
      <DistributorOrder />
    </DistributorLayout>
  ),
},
// Stock
{
  path: "/stock",
  element: (
    <DistributorLayout>
      <DistributorStock />
    </DistributorLayout>
  ),
},
]);

export default router;