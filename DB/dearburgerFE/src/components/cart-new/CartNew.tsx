import React from "react";
import { useEffect, useState } from "react";
import "./Cart-styles.css";
import { Checkout } from "../checkout-component/Checkout";
import { RootState } from "../../state/store/store";
import { useSelector } from "react-redux";
import CartFoodItem from "../cart-food-item-component/cart-food-item";
import { useDispatch } from "react-redux";
import { toggleCartMobile, setDisplayType } from "../../state/store/store";
import { Button,message } from "antd";

import { removeCartItems } from "../../state/store/store";

import { sendOrder } from "../../request/OrderRequest";


interface HoldOrders {
  orderID: String;
  status: string;
  datetime: Date; // Assuming datetime is a Date object
  orderitems: {
    cartItemID: string;
    foodItemID: string;
    name: string;
    description: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
    quantity: number;
    size?: string; // Optional property for size
    addonID?: string[]; // Optional array of addon IDs
  }[];
}


interface HoldOrderData {
  orderID: string;
  orderStatus: string;
  orderDatetime: Date;
  orderItems: {
    menuItemID: string;
    orderTypeID: string;
    orderQty: number;
    itemPriceID: string;
    paymentTypeID: string;
    optionID: string;
  }[];

}



const CartNew: React.FC = () => {
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


  const [deliveryType, setDeliveryType] = useState('takeout');


  const handleOrderClick =  () => {
    try {
      const existingCart = localStorage.getItem("cartItems");
      let cartItems: any[] = []; // Corrected type to match actual data

      if (existingCart) {
        cartItems = JSON.parse(existingCart);
      }

      if (cartItems.length > 0) {

 
      const uniqueOrderId = Math.floor(Math.random() * 10000) + 1; // Generate random 8-digit order ID

      let holdOrders: HoldOrders[] = JSON.parse(localStorage.getItem("holdOrders") || "[]"); // Retrieve hold orders from local storage or initialize empty array


      // Process cart items and create a new HoldOrders object
      const order: HoldOrders = {
        orderID: uniqueOrderId.toString(),
        status: "hold",
        datetime: new Date(),
        orderitems: cartItems.map((item: any, index: number) => ({
            cartItemID:item.id, // Generate a unique cartItemID
            foodItemID: item.foodItemID,
            name: item.name,
            description: item.description,
            price: item.price,
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            quantity: item.quantity,
            size: item.size,
            addonID: item.addonID,
            
        })),
    };

    holdOrders.push(order);
      // Store hold orders in localStorage



      const orderData: HoldOrderData = {
        orderID: uniqueOrderId.toString(), // You can generate this if needed
        orderStatus: "hold",
        orderDatetime: new Date(),
        orderItems: cartItems.map((item: any) => ({
          menuItemID: item.foodItemID,
          orderTypeID:deliveryType,
          orderQty: item.quantity,
          itemPriceID: item.price,
          paymentTypeID:"",
          optionID:item.size,
         
        })),
     
      };



      sendOrder (orderData) // Call the sendHoldOrder function with order data
      .then((response) => {  
        localStorage.setItem("holdOrders", JSON.stringify(holdOrders));
        dispatch(removeCartItems());
      })
      .catch((error) => {
        alert(" error is here"+error);
 
      });


    }else{
      message.warning("Your Cart is Empty!")
    }





    } catch (error) {
      console.error("Error holding order:", error);
      message.error("An error occurred while holding the order. Please try again.");
    }

      
  };




  return (
    <div
      className={showCartMobileView ? "showCartMob" : "hideCartMob"}
      id="cOuter"
    >
 
      {viewCheckout && (
        <Checkout
          checkoutMethod={checkoutMethod}
          toggleVisibility={viewCheckoutWindow}
        />
      )}


<span className="text-secondary">Total Items: {totalItems}</span>
  

<div id="sub" className="text-secondary">Your Order</div>

 
      <div id="cartItems" className="c-container">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem: any, index: number) => (
          <React.Fragment key={cartItem.cartItemID}>
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
            {index !== cartItems.length - 1 && <hr className="cart-divider" />}
          </React.Fragment>
        ))
      ) : (
        <p style={{textAlign:"center",color:"black"}}>Your cart is empty</p>
      )}
    </div>
<div id="sub">How you prefer</div>
<div className="delivery-options">
          <Button className={deliveryType === 'takeout' ? "selected-btn" : ""} onClick={() => setDeliveryType('takeout')} id="rad">Take Away</Button>
          <Button className={deliveryType === 'dinein' ? "selected-btn" : ""} onClick={() => setDeliveryType('dinein')} id="rad">Dine In</Button>
          <Button className={deliveryType === 'deliver' ? "selected-btn" : ""} onClick={() => setDeliveryType('deliver')} id="rad">Deliver</Button>
      </div>
 
      <Button type="primary" className="btnOrder" onClick={handleOrderClick} >Order now</Button>

    </div>

   
  );
};

export default CartNew;
