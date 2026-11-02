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
    <div className="">
      <h1 className="">List Group</h1>

      <div className="w-50 mx-auto">
        <ListGroup variant="flush">
          {socialMedia.map((social, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <i className={`bi ${social.icon}`}></i>
                <span>{social.name}</span>
              </div>

              <span>{social.percentage}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default RBListGroup;
