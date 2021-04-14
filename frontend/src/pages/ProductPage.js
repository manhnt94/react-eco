import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductPage(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const productId = props.match.params.id;

  useEffect(() => {
    const fetchDetailProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/products/${productId}`);
        setLoading(false);
        setProduct(data);
      } catch (error) {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        setLoading(false);
        setError(errorMessage);
      }
    };

    fetchDetailProduct();
  }, [productId]);

  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}?qty=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message error>{error}</Message>
      ) : (
        <div className="product-detail">
          <Link to="/" className="inline-block mb-4">
            Back to result
          </Link>
          <div className="flex justify-around items-start">
            <div className="product-detail__image flex-0035">
              <img src="/images/img-product.jpg" alt={product.name} />
            </div>
            <div className="product-detail__information flex-0025">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Pirce : ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="product-detail__cart flex-0025 border-2 border-gray-400 m-h-0 rounded py-2">
              <div className="w-full flex justify-between px-2 pb-2">
                <span>Price</span>
                <span>${product.price}</span>
              </div>
              <div className="w-full flex justify-between px-2 pb-2">
                <span>Status</span>
                {product.countInStock > 0 ? (
                  <span className="text-green-400">In Stock</span>
                ) : (
                  <span className="text-red-500">Unavailable</span>
                )}
              </div>
              <div className="w-full flex justify-between px-2 pb-2">
                {product.countInStock > 0 && (
                  <>
                    <span>Quantity</span>
                    <select
                      className="border-2 border-gray-400 rounded"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((val) => (
                        <option key={val + 1} value={val + 1}>{val + 1}</option>
                      ))}
                    </select>
                  </>
                )}
              </div>
              <div className="px-2">
                <button
                  className="w-full py-2 bg-yellow-300 rounded"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
