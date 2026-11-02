import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

function RBDropdowns() {
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const menuItems = [
    {
      title: "Dashboard",
      icon: "bi-speedometer2",
    },
    {
      title: "Notification",
      icon: "bi-bell",
    },
    {
      title: "Settings",
      icon: "bi-gear",
    },
    {
      title: "Logout",
      icon: "bi-box-arrow-right",
    },
  ];

  const renderMenuItems = () => (
    <>
      {menuItems.map((item) => (
        <Dropdown.Item
          key={item.title}
          as="button"
          onClick={() => console.log(item.title)}
        >
          <i className={`bi ${item.icon} me-2`}></i>
          {item.title}
        </Dropdown.Item>
      ))}
    </>
  );

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Dropdowns</h2>

      <div className="row align-items-start">
        <div className="col-md-4 border-end pb-4">
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-filled"
            >
              <i className="bi bi-person me-2"></i>
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>{renderMenuItems()}</Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-4 border-end pb-4">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-primary"
              id="dropdown-outline"
              bsPrefix="profile-toggle"
            >
              <i className="bi bi-person me-2"></i>
              Profile
              <i className="bi bi-chevron-down ms-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>{renderMenuItems()}</Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-4 d-flex justify-content-end">
          <Dropdown
            align="end"
            // show={showAvatarMenu}
            onMouseEnter={() => setShowAvatarMenu(true)}
            onMouseLeave={() => setShowAvatarMenu(false)}
          >
            <Dropdown.Toggle
              as="button"
              id="dropdown-avatar"
              className="border-0 bg-transparent p-0"
              aria-label="Open profile menu"
              bsPrefix="avatar-toggle"
            >
              <Image
                src="https://i.pravatar.cc/150?img=47"
                roundedCircle
                width={52}
                height={52}
                alt="Profile"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>{renderMenuItems()}</Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default RBDropdowns;
