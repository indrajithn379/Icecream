import React from "react";

const Services = () => {
  return (
    <services id="srv">
      <div>
        <h1
          style={{
            fontFamily: "fantasy",
            color: "brown",
            fontSize: "50px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Best Services We Provide
          <br />
          For Our Clients!
        </h1>
        <br />
        <br />
        <div style={{ display: "flex", marginLeft: "100px" }}>
          <div
            className="card card-hover"
            style={{ width: "20rem", marginLeft: "5%" }}
          >
            <img
              src="service-1.jpg"
              className="card-img-top rounded-circle rotate-and-grow-on-hover"
              alt="..."
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                marginLeft: "23%",
                marginTop: "10px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                <p
                  style={{
                    marginLeft: "50px",
                    fontSize: "20px",
                    color: "blue",
                  }}
                >
                  <b>Quality Maintain</b>
                </p>
                <p style={{ fontFamily: "georgia" }}>
                  <b>
                    The composition of ice cream varies in different regions and
                    different markets. Generally, a good ice cream contains 12%
                    fat, 11% milk solids-not-fat (MSNF), 15% sugar, 0.3%
                    stabilizer and emulsifier, and 38.3% total solids.
                  </b>
                </p>
              </p>
            </div>
          </div>
          <div
            className="card card-hover"
            style={{ width: "20rem", marginLeft: "10%" }}
          >
            <img
              src="service-2.jpg"
              className="card-img-top rounded-circle rotate-and-grow-on-hover"
              alt="..."
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                marginLeft: "23%",
                marginTop: "10px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                <p
                  style={{
                    marginLeft: "50px",
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    color: "blue",
                  }}
                >
                  <b>Individual Approach</b>
                </p>
                <p style={{ fontFamily: "georgia" }}>
                  <b>
                    Frozen Treats typically made from milk or cream that has
                    been flavoured with a sweetener, either sugar or an
                    alternative, and a spice, such as cocoa or vanilla, or with
                    fruit, such as strawberries or peaches.
                  </b>
                </p>
              </p>
            </div>
          </div>
          <div
            className="card card-hover"
            style={{ width: "20rem", marginLeft: "10%" }}
          >
            <img
              src="service-3.jpg"
              className="card-img-top rounded-circle rotate-and-grow-on-hover"
              alt="..."
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                marginLeft: "23%",
                marginTop: "10px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                <p
                  style={{
                    marginLeft: "50px",
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    color: "blue",
                  }}
                >
                  <b>Customer Support</b>
                </p>
                <p style={{ fontFamily: "georgia" }}>
                  <b>
                    We are providing great customer service means doing
                    something the customer doesn't expect. So do the unexpected.
                    Whether giving them an extra topping or extra servings, it's
                    not just about the money, it's about doing something the
                    customer doesn't expect.
                  </b>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </services>
  );
};

export default Services;
