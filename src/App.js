import "./index.css";
import { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/ShoppingContext";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";


const promise = loadStripe(
  'pk_test_51PSfHBRqnYckXkxI7gMGPnEiSW1CrQNaSWzxvflq77kR3IqcoRJmY50GcQtjbGqs3TZGaOQJ8uKAQ7zpOiiXoGfC00XAsZgipC'
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

//mui.com/components/material-icons/?query=basket
//checkout (isLogin) > payment (isLogin) > PaidOrder
