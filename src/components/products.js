import React, { useState } from "react";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productName, setProductName] = useState("");
  const [toppings, setToppings] = useState(false);
  const [orders, setOrders] = useState([]); // State to store orders

  const openModal = (product) => {
    setProductName(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const orderNow = () => {
    const priceMap = {
      Vanilla: 99,
      Chocolate: 129,
      Strawberry: 109,
      Blackcurrent: 169,
      ButterSkotch: 149,
    };
    const toppingsParam = toppings ? "with Toppings" : "without Toppings";
    const price = priceMap[productName] * quantity;
    const order = {
      productName,
      quantity,
      toppings: toppingsParam,
      price,
    };

    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    closeModal();
  };
  return (
    <prod id="prd">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <div style={{ display: "flex", marginTop: "100px" }}>
                <div
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-3 px-3"
                  style={{ width: "300px", height: "400px", padding: "10px" }}
                >
                  <div
                    className="bg-info mt-n5 py-3"
                    style={{ width: "100px" }}
                  >
                    <h4 className="font-weight-bold text-white mb-0">Rs.99</h4>
                  </div>
                  <div
                    className="position-relative bg-info rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      className="rounded-circle w-100 h-100  rotate-and-grow"
                      src="service-2.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5
                    className="font-weight-bold mb-4"
                    style={{ fontFamily: "impact" }}
                  >
                    VANILLA
                  </h5>
                  <a
                    href="#prd"
                    className="btn btn-sm btn-primary"
                    onClick={() => openModal("Vanilla")}
                  >
                    Order Now
                  </a>
                </div>

                <div
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-3 px-3"
                  style={{ width: "1000px", height: "400px", padding: "10px" }}
                >
                  <div
                    className="bg-info mt-n5 py-3"
                    style={{ width: "100px" }}
                  >
                    <h4 className="font-weight-bold text-white mb-0">Rs.129</h4>
                  </div>
                  <div
                    className="position-relative bg-info rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      className="rounded-circle w-100 h-100  rotate-and-grow"
                      src="product-2.jpg"
                      style={{ objectFit: "cover" }}
                      rotate-and-grow-on-hover
                      prod
                    />
                  </div>
                  <h5
                    className="font-weight-bold mb-4"
                    style={{ fontFamily: "impact", color: "brown" }}
                  >
                    CHOCOLATE
                  </h5>
                  <a
                    href="#prd"
                    className="btn btn-sm btn-primary"
                    onClick={() => openModal("Chocolate")}
                  >
                    Order Now
                  </a>
                </div>

                <div
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-3 px-3"
                  style={{
                    width: "600px",
                    height: "400px",
                    padding: "10px",
                    backgroundColor: "pink",
                  }}
                >
                  <div className="bg-info mt-n5 py-3" style={{ width: "80px" }}>
                    <h4 className="font-weight-bold text-white mb-0">Rs.109</h4>
                  </div>
                  <div
                    className="position-relative bg-info rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      className="rounded-circle w-100 h-100  rotate-and-grow"
                      src="product-5.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5
                    className="font-weight-bold mb-4"
                    style={{ fontFamily: "impact", color: "pink" }}
                  >
                    STRAWBERRY
                  </h5>
                  <a
                    href="#prd"
                    className="btn btn-sm btn-primary"
                    onClick={() => openModal("Strawberry")}
                  >
                    Order Now
                  </a>
                </div>

                <div
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-3 px-3"
                  style={{ width: "1000px", height: "400px", padding: "10px" }}
                >
                  <div className="bg-info mt-n5 py-3" style={{ width: "80px" }}>
                    <h4 className="font-weight-bold text-white mb-0">Rs.169</h4>
                  </div>
                  <div
                    className="position-relative bg-info rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      className="rounded-circle w-100 h-100  rotate-and-grow"
                      src="product-4.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5
                    className="font-weight-bold mb-4"
                    style={{ fontFamily: "impact", color: "purple" }}
                  >
                    BLACKCURRANT
                  </h5>
                  <a
                    href="#prd"
                    className="btn btn-sm btn-primary"
                    onClick={() => openModal("Blackcurrent")}
                  >
                    Order Now
                  </a>
                </div>
                <div
                  className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-3 px-3"
                  style={{ width: "700px", height: "400px", padding: "10px" }}
                >
                  <div className="bg-info mt-n5 py-3" style={{ width: "80px" }}>
                    <h4 className="font-weight-bold text-white mb-0">Rs.149</h4>
                  </div>
                  <div
                    className="position-relative bg-info rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: "150px", height: "150px", color: "pink" }}
                  >
                    <img
                      className="rounded-circle w-100 h-100  rotate-and-grow"
                      src="product-3.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5
                    className="font-weight-bold mb-4"
                    style={{
                      fontFamily: "impact",
                      color: " rgb(188, 188, 91)",
                    }}
                  >
                    BUTTERSKOTCH
                  </h5>
                  <a
                    href="#prd"
                    className="btn btn-sm btn-primary"
                    onClick={() => openModal("ButterSkotch")}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div
              className="modal-content"
              style={{
                position: "relative",
                top: "0",
                left: "0",
                transform: "none",
              }}
            >
              <h4>How many Icecreams?</h4>
              <div style={{}}>
                <h1
                  className="btn btn-sm btn-secondary"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </h1>
                <span style={{ margin: "0 10px" }}>{quantity}</span>
                <h1
                  className="btn btn-sm btn-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </h1>
                <div className="check">
                  <input
                    type="checkbox"
                    id="toppingsCheckbox"
                    checked={toppings}
                    onChange={() => setToppings(!toppings)}
                  />
                  <label htmlFor="toppingsCheckbox">
                    <b> &nbsp;Add Toppings</b>
                  </label>
                </div>
              </div>

              <div className="orcn">
                <button onClick={orderNow}>Order</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        <div className="btn btn-sm btn-primary vieworder">
          <button onClick={() => (window.location.href = "order.html")}>
            <b>View Orders</b>
          </button>
        </div>
      </div>
    </prod>
  );
};

export default Product;
