import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "./svg/view";

const Loadable = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <Loading />
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
const Works = Loadable(lazy(() => import("./pages/Works")));
const About = Loadable(lazy(() => import("./pages/About")));
const Contacts = Loadable(lazy(() => import("./pages/Contacts")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
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

// <!-- <meta
// name="description"
// content="Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
// /> -->
// <meta
// name="keywords"
// content="Nodirbek Makhmudov, front-end developer, web developer, portfolio, HTML, CSS, JavaScript, React, projects, Nextjs, Full Stack"
// />
// <meta name="author" content="Nodirbek Makhmudov" />
// <meta
// property="og:title"
// content="Nodirbek Makhmudov - Front-End Developer Portfolio"
// />
// <!-- <meta
// property="og:description"
// content="Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
// /> -->
// <meta property="og:type" content="website" />
// <meta property="og:url" content="https://makhmudov-nodirbek.vercel.app" />
// <meta property="og:image" content="/public/website-screenshot.png" />
// <meta name="twitter:card" content="summary_large_image" />
// <meta
// name="twitter:title"
// content="Nodirbek Makhmudov - Front-End Developer Portfolio"
// />
// <!-- <meta
// name="twitter:description"
// content="Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
// /> -->
// <meta name="twitter:image" content="/public/website-screenshot.png" />
