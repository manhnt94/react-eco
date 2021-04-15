import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

export default function ProductListPage(props) {
  const { productList } = useSelector((state) => state);
  const { loading, products, error } = productList;
  const { productCreate } = useSelector((state) => state);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const dispatch = useDispatch();
  console.log("outside useeffect")
  useEffect(() => {
    // Generate new product success then edit
    if (successCreate) {
        console.log("before dispatch")
      dispatch({ type: PRODUCT_CREATE_RESET });
      console.log("after dispatch");
      props.history.push(`/product/${createdProduct.product._id}/edit`);
    }
    dispatch(listProducts());
  }, [dispatch, props.history, createdProduct, successCreate]);

  const handleCreateProduct = () => {
    dispatch(createProduct());
  };

  const handleDeleteProdct = (id) => {};

  return (
    <>
      <div>
        <h1>Products</h1>
        <button
          type="button"
          className="bg-yellow-400 p-2 rounded"
          onClick={handleCreateProduct}
        >
          Create Product
        </button>
      </div>
      {loadingCreate && <Loading></Loading>}
      {errorCreate && <Message error>{errorCreate}</Message>}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message error>{error}</Message>
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <button
                      className="border-2 border-gray-400 rounded"
                      onClick={() =>
                        props.history.push(`/product/${product._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="border-2 border-gray-400 rounded"
                      onClick={handleDeleteProdct}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
