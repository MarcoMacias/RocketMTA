import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "./router/BrowserRouter";
import { GlobalStyles } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Suspense>
    <GlobalStyles />
    <RouterProvider router={BrowserRouter} />
    <ToastContainer />
  </React.Suspense>
);
