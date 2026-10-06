import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function RBImages() {
  const avatars = [
    {
      name: "Radhika Parmar",
      image: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Rajkumar Jadeja",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Aman Sharma",
      image: "https://i.pravatar.cc/100?img=13",
    },
    {
      name: "Priya Singh",
      image: "https://i.pravatar.cc/100?img=32",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Images</h1>

      <div className="images-section">
        <h2>Avatar Group</h2>

        <div className="avatar-group">
          {avatars.map((avatar, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={<Tooltip>{avatar.name}</Tooltip>}
            >
              <img
                src={avatar.image}
                alt={avatar.name}
                className="group-avatar"
              />
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RBImages;
