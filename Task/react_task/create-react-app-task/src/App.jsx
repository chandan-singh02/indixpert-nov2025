import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Static from "./pages/assignments/Static";
import Dynamic from "./pages/assignments/Dynamic";
import Counter from "./pages/assignments/Counter";
import TodoList from "./pages/assignments/TodoList";
import RBBadges from "./pages/non_interactive_components/RBBadges";
import RBBreadcrumbs from "./pages/non_interactive_components/RBBreadcrumbs";
import RBButtonGroups from "./pages/non_interactive_components/RBButtonGroups";
import RBButtons from "./pages/non_interactive_components/RBButtons";
import RBCards from "./pages/non_interactive_components/RBCards";
import RBImages from "./pages/non_interactive_components/RBImages";
import RBListGroup from "./pages/non_interactive_components/RBListGroup";
import RBFigure from "./pages/non_interactive_components/RBFigure";
import RBPagination from "./pages/non_interactive_components/RBPagination";
import RBSpinners from "./pages/non_interactive_components/RBSpinners";
import RBPrgressBars from "./pages/non_interactive_components/RBPrgressBars";
import RBTables from "./pages/non_interactive_components/RBTables";

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
      {
        path: "badges",
        element: <RBBadges />,
      },
      {
        path: "breadcrumbs",
        element: <RBBreadcrumbs />,
      },
      {
        path: "buttons",
        element: <RBButtons />,
      },
      {
        path: "button-group",
        element: <RBButtonGroups />,
      },
      {
        path: "cards",
        element: <RBCards />,
      },
      {
        path: "images",
        element: <RBImages />,
      },
      {
        path: "list-group",
        element: <RBListGroup />,
      },
      {
        path: "figures",
        element: <RBFigure />,
      },
      {
        path: "pagination",
        element: <RBPagination />,
      },
      {
        path: "progress-bars",
        element: <RBPrgressBars />,
      },
      {
        path: "spinners",
        element: <RBSpinners />,
      },
      {
        path: "tables",
        element: <RBTables />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
