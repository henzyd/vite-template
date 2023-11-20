import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Protected from "./layouts/protected";
import { fetchUserIfTokenExists } from "./utils/api";
import Login from "./pages/login";
import NotFound from "./pages/404";
import Home from "./pages/home";
import { Dashboard } from "./pages";
import ErrorBoundary from "./components/error-boundary";
import DashboardLoader from "./components/loader/dashboard";
import DashboardLayout from "./layouts/dashboard";

async function loader() {
  try {
    await fetchUserIfTokenExists();

    return null;
  } catch (error) {
    return new Response("", {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route loader={loader} element={<Protected />}>
        <Route
          element={
            <Suspense fallback={<DashboardLoader />}>
              <DashboardLayout />
            </Suspense>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="/" element={<Home />} />
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<DashboardLoader />} />;
}

export default App;
