import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Product from "../components/Product";

export default function HomePage(props) {
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message />
      ) : (
        <div className="px-8 grid grid-cols-4 gap-8">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
