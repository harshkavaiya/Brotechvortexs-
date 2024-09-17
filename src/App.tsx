import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layout/Layouts";
import Hero from "./components/Hero";
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
