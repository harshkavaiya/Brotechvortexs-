import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layout/Layouts";
import Hero from "./components/Hero";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Project from "./pages/Project";
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
          path: "*",
          element: <NotFound />,
        },
      ],
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
