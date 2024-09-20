import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import Dashboard from "./components/AllPages/dashboardSection/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transactions from "./components/AllPages/transactionsSection/Transactions";
import Product from "./components/AllPages/productSection/Product";
import Invoices from "./components/AllPages/invoicesSection/Invoices";
import Subscription from "./components/AllPages/subscriptionSection/Subscription";
import Settings from "./components/AllPages/settingsSection/Settings";

function App() {
  const [themeValue, setThemeValue] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout themeValue={themeValue} setThemeValue={setThemeValue}/>,
      children: [
        {
          path: "/",
          element: <Dashboard themeValue={themeValue} setThemeValue={setThemeValue} />,
        },
        {
          path:"/transactions",
          element:<Transactions/>
        },
        {
          path:"/product",
          element:<Product/>,
        },
        {
          path:"/invoices",
          element:<Invoices/>
        },
        {
          path:"/subscription",
          element:<Subscription/>
        },
        {
          path:"/settings",
          element:<Settings/>,
        }
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
