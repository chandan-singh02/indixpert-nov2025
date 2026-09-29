import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Static from "./pages/Static";
import Dynamic from "./pages/Dynamic";
import Counter from "./pages/Counter";
import TodoList from "./pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "static",
        element: <Static />,
      },
      {
        path: "dynamic",
        element: <Dynamic />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
