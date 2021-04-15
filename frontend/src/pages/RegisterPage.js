import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

export default function RegisterPage(props) {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { userRegister } = useSelector((state) => state);
  const { loading, userInfo, error } = userRegister;
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Password not match!");
    } else {
      const { name, email, password } = registerForm;
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="m-auto w-2/5 mt-20">
      <form onSubmit={handleSubmitForm}>
        <h2 className="font-bold mb-4">Sign In</h2>
        {loading && <Loading />}
        {error && <Message error>{error}</Message>}
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-2 border-gray-400 rounded py-2"
            placeholder="Enter name"
            required
            onChange={(e) =>
              setRegisterForm({
                ...registerForm,
                name: e.target.value,
              })
            }
          />
        </div>
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
            onChange={(e) =>
              setRegisterForm({
                ...registerForm,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-2 border-gray-400 rounded py-2"
            placeholder="Enter password"
            required
            onChange={(e) =>
              setRegisterForm({
                ...registerForm,
                password: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block">
            Enter confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border-2 border-gray-400 rounded py-2"
            placeholder="Enter confirmPassword"
            required
            onChange={(e) =>
              setRegisterForm({
                ...registerForm,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <button className="bg-yellow-400 w-full rounded py-2" type="submit">
            Register
          </button>
        </div>
        <div className="mb-4">
          <Link to="/signin">Sign in</Link>
        </div>
      </form>
    </div>
  );
}
