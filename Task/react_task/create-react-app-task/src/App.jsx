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
import RBAccordions from "./pages/interactive_components/RBAccordions";
import RBCarousels from "./pages/interactive_components/RBCarousels";
import RBDropdowns from "./pages/interactive_components/RBDropdownS";
import RBModal from "./pages/interactive_components/RBModal";
import RBNavbarOffcanvas from "./pages/interactive_components/RBNavbarOffcanvas";
import RBNavsTabs from "./pages/interactive_components/RBNavsTabs";
import RBOverlays from "./pages/interactive_components/RBOverlays";
import RBBasicFormControls from "./pages/forms/RBBasicFormControl";
import RBFormikForm from "./pages/forms/RBFormikForm";
import RHFForm from "./pages/forms/RHFForm";
import RHFFormYup from "./pages/forms/RHFFormYup";
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
      {
        path: "accordions",
        element: <RBAccordions />,
      },
      {
        path: "carousels",
        element: <RBCarousels />,
      },
      {
        path: "dropdown",
        element: <RBDropdowns />,
      },
      {
        path: "modals",
        element: <RBModal />,
      },
      {
        path: "navbar-offcanvas",
        element: <RBNavbarOffcanvas />,
      },
      {
        path: "navs-tabs",
        element: <RBNavsTabs />,
      },
      {
        path: "overlays",
        element: <RBOverlays />,
      },
      {
        path: "rb-basic-form",
        element: <RBBasicFormControls />,
      },
      {
        path: "rb-formik-form",
        element: <RBFormikForm />,
      },
      {
        path: "rhf-form",
        element: <RHFForm />,
      },
      {
        path: "rhf-form-yup",
        element: <RHFFormYup />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
