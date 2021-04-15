import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function Header(props) {
  const { cart } = useSelector((state) => state);
  const { userSignin } = useSelector((state) => state);
  const { cartItems } = cart;
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <header className="header bg-header h-14 mb-4">
      <div className="header__wrapper h-full flex justify-between pr-4">
        <div className="flex items-center overflow-hidden">
          <Link to="/" className="-ml-8">
            <img src="/images/my-logo.png" alt="My logo" className="" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="text-white">
            Cart {cartItems.length && cartItems.length}
          </Link>
          {userInfo ? (
            <Link to="#" className="pl-6 text-white" onClick={handleSignout}>
              Sigout
            </Link>
          ) : (
            <Link to="/signin" className="pl-6 text-white">
              Sign in
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="group relative ml-4 text-white">
              <Link to="#admin">
                Admin <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="hidden absolute right-0 text-white group-hover:block bg-gray-400 shadow-xl p-2 rounded">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/productlist">Products</Link>
                </li>
                <li>
                  <Link to="/orderlist">Orders</Link>
                </li>
                <li>
                  <Link to="/userlist">Users</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
