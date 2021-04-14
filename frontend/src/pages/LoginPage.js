import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const { userSignin } = useSelector((state) => state);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
        console.log("huhu")
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="m-auto w-2/5 mt-20">
      <form onSubmit={handleSubmitForm}>
        <h2 className="font-bold mb-4">Sign In</h2>
        {loading && <Loading />}
        {error && <Message error>{error}</Message>}
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-2 border-gray-400 rounded py-2"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">
            Email address
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-2 border-gray-400 rounded py-2"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button className="bg-yellow-400 w-full rounded py-2" type="submit">
            Sign In
          </button>
        </div>
        <div className="mb-4">
          <Link to="/">Create your account</Link>
        </div>
      </form>
    </div>
  );
}
