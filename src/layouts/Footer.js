const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img
                  src="images/logo.png"
                  alt="image"
                  style={{
                    maxWidth: "100px",
                    width: "100%",
                    maxHeight: "100px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5
                style={{
                  color: "#b99272",
                }}
              >
                Working Hours
              </h5>
              <ul>
                <li
                  style={{
                    color: "#b99272",
                  }}
                >
                  Sunday - Thursday
                  <em>08:00 am - 09:00pm</em>
                </li>
                <li
                  style={{
                    color: "#b99272",
                  }}
                >
                  Only Friday
                  <em>03:00 pm - 09:00pm</em>
                </li>
                <li>
                  <strong
                    style={{
                      color: "#b99272",
                    }}
                  >
                    Saturday Close
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5
                style={{
                  color: "#b99272",
                }}
              >
                Contact Us
              </h5>
              <ul>
                <li
                  style={{
                    color: "#b99272",
                  }}
                >
                  <i className="las la-map-marker" />
                  <em
                    style={{
                      color: "#b99272",
                    }}
                  >
                    Location :
                  </em>
                  Tebet, Jakarta Selatan
                </li>
                <li
                  style={{
                    color: "#b99272",
                  }}
                >
                  <i className="las la-envelope-open-text" />
                  <em
                    style={{
                      color: "#b99272",
                    }}
                  >
                    Email Address :
                  </em>
                  kaffendev@gmail.com
                </li>
                <li
                  style={{
                    color: "#b99272",
                  }}
                >
                  <i className="las la-phone" />
                  <em
                    style={{
                      color: "#b99272",
                    }}
                  >
                    Phone Number :
                  </em>
                  +62 (865) 111 22
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5
                style={{
                  color: "#b99272",
                }}
              >
                Gallery
              </h5>
              <ul>
                <li>
                  <a
                    href="images/grid_gal1.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal6.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2023 ruangparadia.id All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
