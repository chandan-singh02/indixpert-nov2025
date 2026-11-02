import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

function RBCarousels() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
      title: "First Slide",
      description: "Enjoy the beautiful view of the bridge.",
    },
    {
      image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
      title: "Second Slide",
      description: "Explore the beautiful city of Shanghai.",
    },
    {
      image:
        "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      title: "Third Slide",
      description: "Discover the amazing Hong Kong skyline.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop",
      title: "Fourth Slide",
      description: "Explore the beautiful city of London.",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrevious = () => {
    setIndex((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setIndex((currentIndex) => Math.min(slides.length - 1, currentIndex + 1));
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Carousel</h2>

      {/* Carousel */}
      <div className="position-relative rounded-4 overflow-hidden">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          interval={null}
        >
          {slides.map((slide) => (
            <Carousel.Item key={slide.title}>
              <img
                src={slide.image}
                alt={slide.title}
                className="d-block w-100 rounded-4"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3 className="fw-bold text-white">{slide.title}</h3>
                <p className="fw-semibold text-white">{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Previous Arrow */}
        <Button
          variant="link"
          className="position-absolute top-50 start-0 translate-middle-y ms-3 p-0 border-0 text-white"
          onClick={handlePrevious}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "transparent",
              opacity: 0.8,
            }}
          >
            <ArrowLeft size={18} />
          </span>
        </Button>

        <Button
          variant="link"
          className="position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 text-white"
          onClick={handleNext}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "transparent",
              opacity: 0.8,
            }}
          >
            <ArrowRight size={18} />
          </span>
        </Button>
      </div>

      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center mt-3"
      >
        {slides.map((slide, slideIndex) => (
          <Button
            key={slide.title}
            variant={index === slideIndex ? "primary" : "secondary"}
            className="rounded-circle p-0"
            style={{
              width: "12px",
              height: "12px",
            }}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-pressed={index === slideIndex}
          />
        ))}
      </Stack>

      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center mt-3"
      >
        <Button
          variant="primary"
          onClick={handlePrevious}
          disabled={index === 0}
        >
          <ArrowLeft size={18} /> Previous
        </Button>

        <Button
          variant="primary"
          onClick={handleNext}
          disabled={index === slides.length - 1}
        >
          Next <ArrowRight size={18} />
        </Button>
      </Stack>
    </div>
  );
}

export default RBCarousels;
