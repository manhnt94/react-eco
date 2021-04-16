import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Product from "../components/Product";

export default function SearchPage(props) {
  const { name = "all", category = "all" } = useParams();
  const { productList } = useSelector((state) => state);
  const { loading, products, error } = productList;
  const { productCategoryList } = useSelector((state) => state);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
      })
    );
    console.log(category, name);
  }, [dispatch, name, category]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/search/category/${filterCategory}/name/${filterName}`;
  };

  console.log(products);

  return (
    <>
      {loadingCategories ? (
        <Loading></Loading>
      ) : errorCategories ? (
        <Message error>{errorCategories}</Message>
      ) : (
        categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/search/category/${cat}`}
              //   onClick={() => setSidebarIsOpen(false)}
            >
              {cat}
            </Link>
          </li>
        ))
      )}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message error>{error}</Message>
      ) : products ? (
        <div className="px-8 grid grid-cols-4 gap-8">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      ) : (
        <Message error>Not found</Message>
      )}
    </>
  );
}
