import Figure from "react-bootstrap/Figure";

function RBFigure() {
  return (
    <div className="component-page">
      <h1 className="component-title">Figures</h1>

      <div className="figure-section">
        <Figure>
          <Figure.Image
            width={400}
            height={300}
            alt="React Image"
            src="https://images.unsplash.com/photo-1484704849700-f032a568e944"
          />

          <Figure.Caption>
            A beautiful example of a React development image.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default RBFigure;
