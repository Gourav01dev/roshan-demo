import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../components/Layout";

const UserList = lazy(() => import("../pages/UserList"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
  );
};

export default AppRoutes;
