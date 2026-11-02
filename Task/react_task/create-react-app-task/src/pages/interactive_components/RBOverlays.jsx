import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function RBOverlays() {
  const renderPopover = (placement, title) => (
    <Popover id={`popover-${placement}`}>
      <Popover.Header as="h3">{title}</Popover.Header>

      <Popover.Body>
        <strong>Holy guacamole!</strong> Check this info.
      </Popover.Body>
    </Popover>
  );

  const renderTooltip = (placement) => (
    <Tooltip id={`tooltip-${placement}`}>Tooltip on {placement}.</Tooltip>
  );

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-5">Overlays and Tooltips</h2>

      {/* Popovers on Hover */}
      <Stack
        direction="horizontal"
        gap={2}
        className="flex-wrap mb-5"
      >
        {["top", "right", "bottom", "left"].map((placement) => (
          <OverlayTrigger
            key={placement}
            trigger="hover"
            placement={placement}
            overlay={renderPopover(placement, `Popover ${placement}`)}
          >
            <Button
              variant="outline-secondary"
              size="sm"
            >
              Popover on {placement}
            </Button>
          </OverlayTrigger>
        ))}
      </Stack>

      <hr className="my-5" />

      {/* Tooltips on Hover */}
      <Stack
        direction="horizontal"
        gap={2}
        className="flex-wrap"
      >
        {["top", "right", "bottom", "left"].map((placement) => (
          <OverlayTrigger
            key={placement}
            trigger="hover"
            placement={placement}
            overlay={renderTooltip(placement)}
          >
            <Button
              variant="secondary"
              size="sm"
            >
              Tooltip on {placement}
            </Button>
          </OverlayTrigger>
        ))}
      </Stack>
    </div>
  );
}

export default RBOverlays;
