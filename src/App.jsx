import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const Loadable = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

  // Set display name for the functional component
  WrappedComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

const RootLayout = Loadable(lazy(() => import("./Layouts/RootLayout")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
