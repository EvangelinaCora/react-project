import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartPage.css";

export const CartPage = () => {
  const {
    cart,
    deleteFromCart,
    increaseAmount,
    decreaseAmount,
    totalPurchase,
  } = useContext(CartContext);
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cartPage">
        <h4>El carrito esta vacio</h4>
      </div>
    );
  }
  return (
    <div>
      {cart.map((prod) => (
        <div className="producto-container" key={prod.id}>
          <div className="producto-imagen">
            <img src={prod.img} alt={prod.name} />
          </div>
          <div className="producto-info">
            <p
              style={{
                color: "black",
                fontSize: "18px",
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              }}
            >
              {prod.name}
            </p>
            <p style={{ color: "black", fontSize: "10px" }}>{prod.id}</p>
          </div>
          <div className="contador">
            <button onClick={() => decreaseAmount(prod)}>-</button>
            <p style={{ color: "black", fontSize: "16px" }}>{prod.amount}</p>
            <button onClick={() => increaseAmount(prod)}>+</button>
          </div>
          <div className="producto-precio">
            <div>
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  }}
                >
                  ${prod.price * prod.amount}
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  style={{ color: "rgb(176, 169, 159)" }}
                  icon={faTrash}
                  onClick={() => deleteFromCart(prod.id)}
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div className="cartPagePrecio">
        <p className="precioTotal">Precio total: ${totalPurchase()}</p>
        <Link to="/purchase">
          <button
            style={{
              margin: "0 0 2rem 5rem",
              padding: "5px 20px",
              color: "black",
            }}
            className="buy-btn"
          >
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};
