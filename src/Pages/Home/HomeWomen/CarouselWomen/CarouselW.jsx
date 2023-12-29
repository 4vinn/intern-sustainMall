import "./CarouselW.css";

export default function CarouselW() {
  return (
    <>
      <div className="sliderW">
        <div className="slidesW">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "17vh", margin: "0" }}>30% OFF</p>
              <p style={{ fontSize: "6vh", margin: "0" }}>SUMMER COLLECTION</p>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide2-text">
              <p style={{ fontSize: "16vh", margin: "0" }}>SHOP NOW</p>
              <p style={{ fontSize: "8vh", margin: "0" }}>
                and elevate your style
              </p>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide3-text">
              <p style={{ fontSize: "16vh", margin: "0" }}>DISCOVER</p>
              <p style={{ fontSize: "8vh", margin: "0" }}>YOUR PERFECT FIT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
