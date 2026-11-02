import Dropdown from "react-bootstrap/Dropdown";

function CompanyDropdown({ title, items }) {
  return (
    <Dropdown
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".dropdown-toggle")?.click();
      }}
      onMouseLeave={(e) => {
        const menu = e.currentTarget.querySelector(".dropdown-menu");
        if (menu?.classList.contains("show")) {
          e.currentTarget.querySelector(".dropdown-toggle")?.click();
        }
      }}
    >
      <Dropdown.Toggle
        variant="light"
        className="border-0"
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item) => (
          <Dropdown.Item
            key={item.label}
            href={item.href}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CompanyDropdown;
