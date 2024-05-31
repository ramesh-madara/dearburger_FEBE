import React from "react";
import { useEffect, useState } from "react";
import "./Cart-styles.css";
import { Checkout } from "../checkout-component/Checkout";
import { RootState } from "../../state/store/store";
import { useSelector } from "react-redux";
import CartFoodItem from "../cart-food-item-component/cart-food-item";
import { useDispatch } from "react-redux";
import { toggleCartMobile, setDisplayType } from "../../state/store/store";
import { Button, Flex } from "antd";
import dataCheckoutMethods from "../../data/data-payment-methods";

const Cart: React.FC = () => {
  //set the checkout method dinein, tekeout,...
  const [checkoutMethod, setCheckoutMethod] = useState<String>(""); 
  //make the chechout window visible
  const [viewCheckout, setViewCheckout] = useState(false);
  //returns the Redux dispatch function to dispatch actions.
  const dispatch = useDispatch();

  //select items from cartItems state
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log(cartItems);
  //select cartMobile state(whether the mobile versin of the cart is displayed)
  const cartViewState = useSelector(
    (state: RootState) => state.cart.cartMobile
  );
  //get cart items count
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity.valueOf(),
    0
  );
  //store cart mobile view according to state.cartMobile
  const [showCartMobileView, setShowCartMobileView] = useState(
    cartViewState.showCartMobile
  );
  //set cart mobile view according to state.cartMobile using Use effect
  useEffect(() => {
    setShowCartMobileView(cartViewState.showCartMobile);
  });

  //detect screen size and set cart view accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        const isMobile = true;
        dispatch(setDisplayType({ isMobile }));
      } else {
        const isMobile = false;
        const showCartMobile = false;

        dispatch(setDisplayType({ isMobile }));
        dispatch(toggleCartMobile({ showCartMobile }));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const viewCheckoutWindow = (checkoutMethodParam: any = {}) => {
    setCheckoutMethod(checkoutMethodParam);
    setViewCheckout(!viewCheckout);
  };
  return (
    <div
      className={showCartMobileView ? "showCartMobile" : "hideCartMobile"}
      id="cartOuter"
    >
      {viewCheckout && (
        <Checkout
          checkoutMethod={checkoutMethod}
          toggleVisibility={viewCheckoutWindow}
        />
      )}

      <span className="text-secondary">Total Items: {totalItems}</span>
      <Flex style={{ width: "100%" }} vertical gap="small" wrap="wrap">
        <Button onClick={() => viewCheckoutWindow("takeout")}>Take Out</Button>
        <Button onClick={() => viewCheckoutWindow("dinein")}>Dine In</Button>
        <Button onClick={() => viewCheckoutWindow("deliver")}>Deliver</Button>
      </Flex>

      <div id="cartItems">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem: any) => {
            return (
              <CartFoodItem
                cartItemID={cartItem.cartItemID}
                foodItemID={cartItem.foodItemID}
                name={cartItem.name}
                description={cartItem.description}
                price={cartItem.price}
                imageSrc={cartItem.imageSrc}
                imageAlt={cartItem.imageAlt}
                cartQuantity={cartItem.quantity}
                addonID={cartItem.addonID}
                size={cartItem.size}
                key={
                  cartItem.quantity + cartItem.cartItemID + cartItem.description
                }
              />
            );
          })
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
