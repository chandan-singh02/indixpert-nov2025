import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="app-layout">
      <div className="sidebar">
        <Link to="/">Home Page</Link>

        <Link to="/static">Static Component</Link>

        <Link to="/dynamic">Dynamic Component</Link>

        <Link to="/counter">Counters</Link>

        <Link to="/todo">TodoList</Link>
      </div>

      <div className="content-area">
        <Outlet />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default MainLayout;
