import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Category from "./ui/Category";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // Component Home sẽ được hiển thị khi người dùng truy cập vào "/"
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
