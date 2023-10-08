import React from "react";

const Footer = () => {
  return (
    <footer id="ft">
      <div
        className="container-fluid footer bg-pink py-5 foot "
        style={{ marginTop: "100px", height: "500px", width: "80%" }}
      >
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-12 mb-4 ">
              <a href="index.html" className="navbar-brand m-0">
                <h1
                  style={{
                    position: "absolute",
                    bottom: "-410%",
                    left: "42%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1",
                    color: "62c3e7",
                    fontFamily: "Fantasy",
                    fontSize: "70px",
                  }}
                >
                  Frozen
                </h1>
                <h1
                  style={{
                    position: "absolute",
                    bottom: "-410%",
                    left: "56%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1",
                    color: "brown",
                    fontFamily: "Fantasy",
                    fontSize: "70px",
                  }}
                >
                  Treats!
                </h1>
                <br />
                <br />
              </a>
            </div>
            <div className="col-12 mb-4">
              <a
                className="btn btn-outline-secondary btn-social mr-2 circle-icon"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-secondary btn-social mr-2 circle-icon"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-secondary btn-social mr-2 circle-icon"
                href="https://www.linkedin.com/in/indrajith-n-232a76248/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-secondary btn-social circle-icon"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="col-12 mt-2 mb-4">
              <div className="row">
                <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                  <h5 className="font-weight-bold mb-2">
                    <b>Get In Touch</b>
                  </h5>
                  <p className="mb-2">123 Street, New York, USA</p>
                  <p className="mb-0">+012 345 67890</p>
                </div>
                <div className="col-sm-6 text-center text-sm-left">
                  <h5 className="font-weight-bold mb-2">
                    <b>Opening Hours</b>
                  </h5>
                  <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                  <p className="mb-0">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <p className="m-0">
                &copy; All Rights Reserved. Designed by{" "}
                <a
                  style={{ textDecoration: "none", color: "blue" }}
                  href="https://www.linkedin.com/in/indrajith-n-232a76248/"
                >
                  <b>Indrajith.</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
