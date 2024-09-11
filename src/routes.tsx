import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import UnauthorizedLayout from "./layouts/UnauthorizedLayout";

const Error = lazy(() => import("./features/error/Error"));
const Home = lazy(() => import("./features/home/Home"));
const Dashboard = lazy(() => import("./features/dashboard/Dashboard"));

export default function AppRoutes() {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
      ],
    },
    {
      element: <UnauthorizedLayout />,
      children: [
        { path: "home", element: <Home /> },
      ],
    },
  ]);
}
