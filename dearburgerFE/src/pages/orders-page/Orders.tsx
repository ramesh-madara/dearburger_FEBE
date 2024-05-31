import { useState, useEffect } from "react";
import "../../App.css";
import "./Orders-styles.css";
import Navbar from "../../components/navbar-component/Navbar";
import FoodItem from "../../components/food-item-component/food-item";
import FeaturedSection from "../../components/featured-section-component/featured-section";
import Cart from "../../components/cart-component/Cart";
import { RootState } from "../../state/store/store";
import { useSelector } from "react-redux";
import FoodItemExpanded from "../../components/food-item-expanded-component/food-item-expanded";

function Orders() {
  return <div className="App">ORDERS</div>;
}

export default Orders;
