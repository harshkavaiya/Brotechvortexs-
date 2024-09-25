import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layout/Layouts";
import Hero from "./components/Hero";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Project from "./pages/Project";
import SingleProjectDetails from "./pages/SingleProjectDetails";
import SignIn from "./admin/auth/SignIn";
import Forgot from "./admin/auth/Forgot";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/Services/:slug",
          element: <Services />,
        },
        {
          path: "/Aboutus",
          element: <Aboutus />,
        },
        {
          path: "/Contactus",
          element: <Contactus />,
        },
        {
          path: "/Project",
          element: <Project />,
        },
        {
          path: "/Project/:slug",
          element: <SingleProjectDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/admin/login",
      element: <SignIn />,
    },
    {
      path: "/admin/forgot-password",
      element: <Forgot />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
