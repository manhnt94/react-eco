import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AdminRoute from "./hocs/AdminRoute";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductEditPage from "./pages/ProductEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/search/name/:name?" component={SearchPage} exact></Route>
        <Route path="/product/:id" component={ProductPage} exact />
        <AdminRoute path="/product/:id/edit" component={ProductEditPage} />
        <AdminRoute path="/productlist" component={ProductListPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
