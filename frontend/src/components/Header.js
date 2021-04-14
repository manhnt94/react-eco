import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;

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
          <Link to="/" className="pl-6 text-white">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
