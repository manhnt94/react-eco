import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../actions/cartActions";
import Message from "../components/Message";

export default function CartPage(props) {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const handleCheckout = () => {
    // If signin then use redirect to push shipping page
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>Shopping now</Message>
      ) : (
        <div className="flex items-start">
          <div className="flex-0070 px-4">
            {cartItems.map((cart) => (
              <div key={cart.productId} className="flex mb-4">
                <div className="flex-0050">
                  <img
                    src={cart.image}
                    alt={cart.name}
                    className="inline-block h-8 w-8 mr-8"
                  />
                  <span>{cart.name}</span>
                </div>
                <div className="flex-0050 flex justify-between">
                  <select
                    className="border-2 border-gray-400 rounded"
                    value={cart.quantity}
                    onChange={(e) =>
                      dispatch(addToCart(cart.productId, e.target.value))
                    }
                  >
                    {[...Array(cart.countInStock).keys()].map((val) => (
                      <option key={val + 1} value={val + 1}>
                        {val + 1}
                      </option>
                    ))}
                  </select>
                  <span>${cart.price}</span>
                  <button
                    className="border-2 border-gray-400 rounded"
                    onClick={() => dispatch(removeCartItem(cart.productId))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-0030 border-2 border-gray-400 rounded p-4">
            <h2 className="mb-4">
              Subtotal (
              {cartItems.reduce((total, cart) => total + cart.quantity, 0)}{" "}
              items):{" "}
              {cartItems.reduce(
                (total, cart) => total + cart.price * cart.quantity,
                0
              )}
            </h2>
            <div>
              <button
                className="w-full bg-yellow-400 py-2 rounded disabled:opacity-50"
                disabled={cartItems.length === 0}
                onClick={() => props.history.push("/signin?redirect=shipping")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
