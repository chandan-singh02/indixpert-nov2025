import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";

function RBImages() {
  const avatars = [
    {
      name: "Aarav Sharma",
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "Ananya Singh",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Rahul Verma",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Priya Gupta",
      image: "https://i.pravatar.cc/100?img=25",
    },
    {
      name: "Riya Mehta",
      image: "https://i.pravatar.cc/100?img=44",
    },
    {
      name: "Arjun Patel",
      image: "https://i.pravatar.cc/100?img=68",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Images</h1>

      <div className="images-section">
        {/* Avatar Sizes */}
        <div>
          <h2>Avatar Sizes</h2>

          <div className="d-flex align-items-center gap-3">
            <Image
              src={avatars[0].image}
              roundedCircle
              width={35}
              height={35}
            />

            <Image
              src={avatars[1].image}
              roundedCircle
              width={45}
              height={45}
            />

            <Image
              src={avatars[2].image}
              roundedCircle
              width={55}
              height={55}
            />

            <Image
              src={avatars[3].image}
              roundedCircle
              width={65}
              height={65}
            />

            <Image
              src={avatars[4].image}
              roundedCircle
              width={75}
              height={75}
            />

            <Image
              src={avatars[5].image}
              roundedCircle
              width={90}
              height={90}
            />
          </div>
        </div>

        <div>
          <h2>Avatar Group</h2>

          <div className="avatar-group">
            {avatars.map((avatar, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={<Tooltip>{avatar.name}</Tooltip>}
              >
                <Image
                  src={avatar.image}
                  alt={avatar.name}
                  roundedCircle
                  className="group-avatar"
                />
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RBImages;
