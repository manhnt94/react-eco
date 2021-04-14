import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="product h-96 border-2 border-gray-400 mb-6">
      <div className="product__image h-72">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} className="w-full max-h-full" />
        </Link>
      </div>
      <div className="product__information pt-2">
        <Link to={`/product/${product._id}`} className="text-blue-600">
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <span>${product.price}</span>
      </div>
    </div>
  );
}
