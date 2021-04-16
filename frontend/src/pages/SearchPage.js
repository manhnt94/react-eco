import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Product from "../components/Product";

export default function SearchPage(props) {
  const { name = "all" } = useParams();
  const { productList } = useSelector((state) => state);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(name));
  }, [dispatch, name]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message error>{error}</Message> ? (
          products
        ) : (
          <div className="px-8 grid grid-cols-4 gap-8">
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        )
      ) : (
        <Message error>Not found</Message>
      )}
    </>
  );
}
