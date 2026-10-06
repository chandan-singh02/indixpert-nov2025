import ListGroup from "react-bootstrap/ListGroup";

function RBListGroup() {
  const socialMedia = [
    {
      name: "Facebook",
      percentage: "20%",
      icon: "bi-facebook",
    },
    {
      name: "Instagram",
      percentage: "20%",
      icon: "bi-instagram",
    },
    {
      name: "YouTube",
      percentage: "20%",
      icon: "bi-youtube",
    },
    {
      name: "TwitterX",
      percentage: "20%",
      icon: "bi-twitter-x",
    },
    {
      name: "LinkedIn",
      percentage: "20%",
      icon: "bi-linkedin",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">List Group</h1>

      <div className="social-card">
        <h2>Social Media Traffic</h2>

        <ListGroup variant="flush">
          {socialMedia.map((social, index) => (
            <ListGroup.Item
              key={index}
              className="social-item"
            >
              <div className="social-name">
                <i className={`bi ${social.icon}`}></i>

                <span>{social.name}</span>
              </div>

              <span className="social-percentage">{social.percentage}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default RBListGroup;
