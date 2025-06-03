import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import List from "./pages/list/List";
import Main from "./pages/main/Main";
import Result from "./pages/results/result";
import Chart from './pages/chart/Chart';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/result/:id",
    element: <Result />,
  },
  {
    path: "/chart",
    element: <Chart />
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();