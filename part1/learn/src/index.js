import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App";
import ConditionalRender from "./components/ConditionalRender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/conditional-rendering",
    element: <ConditionalRender/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)
