import { lazy, ReactElement, Suspense } from "react";
import { RouteObject, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const Home = lazy(() => import("../pages/Home"));
const LaunchDetails = lazy(() => import("../pages/LaunchDetails"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/launch/:launchId",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <LaunchDetails />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    }
];

const router = createBrowserRouter(routes)

const IndexRouter: React.FC = (): ReactElement => {
    return (<RouterProvider router={router} />)
};

export default IndexRouter;