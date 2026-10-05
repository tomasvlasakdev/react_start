import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contects pages to the parent page
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
