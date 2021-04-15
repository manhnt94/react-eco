import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct, updateProduct } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { PRODUCT_UPDATE_RESET } from "../constants/userConstants";

export default function ProductEditPage(props) {
  const productId = props.match.params.id;
  const [productEditForm, setProductEditForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    countInStock: "",
    brand: "",
    description: "",
  });

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const { productUpdate } = useSelector((state) => state);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      props.history.push("/productlist");
    }

    if (!product || product._id !== productId || successUpdate) {
      dispatch(detailsProduct(productId));
    } else {
      setProductEditForm({
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        countInStock: product.countInStock,
        brand: product.brand,
        description: product.description,
      });
    }
  }, [dispatch, product, productId, props.history, successUpdate]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name: productEditForm.name,
        price: productEditForm.price,
        image: productEditForm.image,
        category: productEditForm.category,
        brand: productEditForm.brand,
        countInStock: productEditForm.countInStock,
        description: productEditForm.description,
      })
    );
  };
  return (
    <div className="m-auto w-2/5">
      <form onSubmit={handleSubmitForm}>
        <h2 className="font-bold mb-2">Edit product</h2>
        {loadingUpdate && <Loading></Loading>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loading />
        ) : error ? (
          <Message error>{error}</Message>
        ) : (
          <>
            <div className="mb-2">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={productEditForm.name}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter name"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="block">
                Price
              </label>
              <input
                type="text"
                id="price"
                value={productEditForm.price}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter price"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="image" className="block">
                Image
              </label>
              <input
                type="text"
                id="image"
                value={productEditForm.image}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter image"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    image: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="category" className="block">
                Enter category
              </label>
              <input
                type="text"
                id="category"
                value={productEditForm.category}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter category"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    category: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="brand" className="block">
                Enter brand
              </label>
              <input
                type="text"
                id="brand"
                value={productEditForm.brand}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter brand"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    brand: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="countInStock" className="block">
                Enter count in stock
              </label>
              <input
                type="text"
                id="countInStock"
                value={productEditForm.countInStock}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter count in stock"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    countInStock: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="block">
                Enter description
              </label>
              <input
                type="text"
                id="description"
                value={productEditForm.description}
                className="w-full border-2 border-gray-400 rounded py-2"
                placeholder="Enter description"
                required
                onChange={(e) =>
                  setProductEditForm({
                    ...productEditForm,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <button
                className="bg-yellow-400 w-full rounded py-2"
                type="submit"
              >
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
