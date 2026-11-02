import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet } from "react-router";

function MainLayout() {
  const [openSection, setOpenSection] = useState(null);

  const handleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title semi-bold">Menu</h3>
        <hr />

        {/* ================= ASSIGNMENTS ================= */}

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("assignment")}
          >
            <span>Assignments</span>

            <i
              className={
                openSection === "assignment"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "assignment" && (
            <div className="section-items">
              <Link to="/">Home</Link>
              <Link to="/static">Static</Link>
              <Link to="/dynamic">Dynamic</Link>
              <Link to="/counter">Counter</Link>
              <Link to="/todo">Todo List</Link>
            </div>
          )}
        </div>

        {/* ================= NON INTERACTIVE ================= */}

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("nonInteractive")}
          >
            <span>Non Interactive Comp.</span>

            <i
              className={
                openSection === "nonInteractive"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "nonInteractive" && (
            <div className="section-items">
              <Link to="/badges">Badges</Link>
              <Link to="/breadcrumbs">Breadcrumbs</Link>
              <Link to="/buttons">Buttons</Link>
              <Link to="/button-group">Button Group</Link>
              <Link to="/cards">Cards</Link>
              <Link to="/images">Images</Link>
              <Link to="/list-group">List Group</Link>
              <Link to="/figures">Figures</Link>
              <Link to="/pagination">Pagination</Link>
              <Link to="/progress-bars">Progress Bars</Link>
              <Link to="/spinners">Spinners</Link>
              <Link to="/tables">Tables</Link>
              <Link to="/close-button">Close Button</Link>
            </div>
          )}
        </div>

        {/* ================= INTERACTIVE COMPONENTS ================= */}

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("interactive")}
          >
            <span>Interactive Comp.</span>

            <i
              className={
                openSection === "interactive"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "interactive" && (
            <div className="section-items">
              <Link to="/accordions">Accordions</Link>
              <Link to="/carousels">Carousels</Link>
              <Link to="/dropdown">Dropdown</Link>
              <Link to="/modals">Modals</Link>
              <Link to="/navbar-offcanvas">Navbar & Offcanvas</Link>
              <Link to="/navs-tabs">Navs and Tabs</Link>
              <Link to="/overlays">Overlays & Tooltips</Link>
            </div>
          )}
        </div>

        {/* ================= FORMS ================= */}

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("forms")}
          >
            <span>Forms</span>

            <i
              className={
                openSection === "forms"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "forms" && (
            <div className="section-items">
              <Link to="/rb-basic-form">RB Basic Form</Link>

              <Link to="/rb-formik-form">RB Formik Form</Link>

              <Link to="/rhf-form">RHF Form</Link>

              <Link to="/rhf-form-yup">RHF Form Yup</Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}

      <div className="content-area">
        <Outlet />
      </div>

      {/* Toastify */}

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
