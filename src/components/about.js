import React from "react";

const About = () => {
  return (
    <div id="abt">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1
                className="section-title position-relative text-center mb-5"
                style={{
                  fontFamily: "fantasy",
                  color: "brown",
                  fontSize: "50px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  className="line"
                  style={{
                    borderTop: "3px solid #000",
                    width: "20%",
                    margin: "0 auto",
                  }}
                ></div>
                Traditional & Delicious Ice Cream Since 1950 !
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-4">
                  <h4 className="font-weight-bold mb-3">
                    <b>About Us</b>
                  </h4>
                  <br /> 
                  <h5>
                    Devoted to delivering the exceptionally best-frozen yogurt
                    and sorbet,{" "}
                    <span style={{ color: "green" }}>
                      <b>Frozen Treats</b>
                    </span>{" "}
                    opened in August 2004 on Orchard Street in Lower Manhattan.
                  </h5>
                  <p>
                    We’re hitched and eat plentiful measures of frozen yogurt.
                    We’d cheerfully have a scoop for breakfast, lunch, and
                    supper on the off chance that we could.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="position-relative rounded overflow-hidden">
                    <img
                    className="about-img-aim"
                      src="about.jpg"
                      alt="About Us"
                      style={{ width: "100%" ,height:"500px"}}
                    ></img>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4
                    className="font-weight-bold mb-3"
                    style={{ marginLeft: "100px" }}
                  >
                    <b>Our Features</b>
                    <br />
                    <br />
                  </h4>
                  <h5>
                    As a beloved institution in the world of{" "}
                    <span style={{ color: "green" }}>
                      <b>Frozen Treats</b>
                    </span>
                    , we take pride in continuing the legacy of creating frozen
                    delights that bring smiles and joy to all who savor them.
                  </h5>
                  <h5 className="text-muted mb-3">
                    <i className="fa fa-check text-success mr-3"></i> Wide Range
                    of Flavours.
                  </h5>
                  <h5 className="text-muted mb-3">
                    <i className="fa fa-check text-success mr-3"></i> Quality
                    Ingredients.
                  </h5>
                  <h5 className="text-muted mb-3">
                    <i className="fa fa-check text-success mr-3"></i> Seasonal
                    Specials.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
