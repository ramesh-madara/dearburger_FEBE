import React, { useState,createContext} from "react";
import { CloseOutlined,PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./holdorder.css";
import { updateOrderStatus } from "../../request/OrderUpdateRequest";
import { Button } from "antd";
import { DeleteOutlined} from '@ant-design/icons';
import AddNew from "../holdorders-Addnew-component/addnew";
import {sendFoodItemsOrder } from "../../request/OrderNewItem";

interface MenuItem {
  menuItemID: string;
  orderTypeID: string;
  orderQty: number;
  itemPriceID: string;
  paymentTypeID: string;
  optionID:string;
}

interface OrderItem {
  cartItemID: string;
  foodItemID: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  quantity: number;
  size: string;
  addonID: { value: string; label: string; price: number }[];
}

interface Order1 {
  orderID: string;
  status: string;
  datetime: Date;
  orderitems: OrderItem[];
}

interface Order2 {
  orderID: string;
  status: string;
  datetime: Date;
  MenuItem: MenuItem[];
}
interface CheckoutProps {
  toggleVisibility: () => void;
  ApOrders: Order2[]; // Array of orders, potentially including canceled ones
  orders:Order1[];
  handleCancelOrder: (orderId: string) => void; // Function to handle canceling an order
  handleRemoveItem :(orderId: string, cartItemID: string)=>void;
  handleAddOrder:(updatedOrders: Order1[])=>void;
  revomeCartID: (orderId: string) => void;
}

export const Holdpro = createContext<string | null>(null);

const Hold: React.FC<CheckoutProps> = ({ toggleVisibility, ApOrders, orders, handleCancelOrder, handleRemoveItem,handleAddOrder, revomeCartID }) => {
  const [message, setMessage] = useState(""); // State to store the message
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [expandedOrders, setExpandedOrders] = useState<Set<string>>(new Set());

  const handleAddNewClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setShowAddNewModal(true);

  };

  const handleAddNewClose = () => {
    setShowAddNewModal(false);
    setSelectedOrderId(null);

  };


  const handleClick = (orderId: string, action: string) => {
    setMessage(`Order ID: ${orderId} ${action}`);
    let status="";

      if (action === " is Proceed") {
         status="success";
      }
       else if(action === " is Cancelled") {
        status="cancel";
      }

       updateOrderStatus (orderId, status) 
      .then((response) => {
      

      })
      .catch((error) => {
  
        alert(" error is here"+error);
        handleCancelOrder(orderId);  
      });


    // Clear message after 4 seconds
    const timeoutId = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(timeoutId);
  };



  const handleSaveItems = (orderId: string) => {
    const orderToUpdate = orders.find((order) => order.orderID === orderId);

    if (orderToUpdate) {
      const newFoodItemsToSave:MenuItem[] = orderToUpdate.orderitems
      .filter((item) => item.cartItemID && item.cartItemID.substring(0, 3) === 'new')
      .map((item) => ({
        menuItemID: item.foodItemID,
        orderTypeID: "Dine-in", // Assuming this value needs to be set
        orderQty: item.quantity,
        itemPriceID: item.price.toString(), // Convert to string
        paymentTypeID: "", // Assuming this value needs to be set
        optionID: item.size, // Assuming this value needs to be set
      }));

   
    

      sendFoodItemsOrder (orderId,newFoodItemsToSave) // Call the sendHoldOrder function with order data
      .then((response) => {
        alert(response);
       
      })
      .catch((error) => {
        // Handle error if needed
        alert(" error is there"+error);   
        revomeCartID(orderId);

      });
    }
  };


  const toggleExpand = (orderId: string) => {
    setExpandedOrders((prevExpandedOrders) => {
      const newExpandedOrders = new Set(prevExpandedOrders);
      if (newExpandedOrders.has(orderId)) {
        newExpandedOrders.delete(orderId);
      } else {
        newExpandedOrders.add(orderId);
      }
      return newExpandedOrders;
    });
  };


  return (
    <div className="modal-wrapper">
      <div className="modal-c">
      <CloseOutlined onClick={toggleVisibility} className="close-bt" />
        <div className="checkout-container" >
 
          <div className="msg">{message}</div>
          {ApOrders.length === 0 ? (
            <div className="msg">There are no hold orders</div>
          ) : (
            ApOrders.map((order, index) => (


              <React.Fragment key={index}>
              <div className="order-header">
                <Button
                  type="text"
                  icon={expandedOrders.has(order.orderID) ? <MinusOutlined /> : <PlusOutlined />}
                  onClick={() => toggleExpand(order.orderID)}
                  className="colex"
                />
                <span className="colext">Order ID: {order.orderID}</span>
              </div>
              {expandedOrders.has(order.orderID) && (


              <div key={index} className="checkout-content">
              
                <table style={{ overflowY: "auto" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "200px" }}>Order ID: {order.orderID}</th>
                      <th></th>
                      <th></th>
                      <th>
                        <div className="hbtn">
                        <Button
                      className="add-new"
                      onClick={() => handleAddNewClick(order.orderID)}
                    >
                      Add New
                    </Button>
                        {orders.orderitems.some((item) =>
                            item.cartItemID && item.cartItemID.substring(0, 3) === 'new'
                          ) ? (
                            <Button
                              className="saved"
                              onClick={() => handleSaveItems(order.orderID)}
                            >
                              Save
                            </Button>
                          ) : (
                            <Button
                              className="proceed"
                              onClick={() => handleClick(order.orderID, " is Proceed")}
                            >
                              Proceed
                            </Button>
              )}
                          <Button
                            className="cancel"
                            onClick={() => {
                              handleClick(order.orderID, " is Cancelled");
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderitems && order.orderitems.map((item) => (
                      
                      <tr key={item.cartItemID} className="food">
                        <td className="text-secondary text-bold iname">-{item.name}</td>

                        <td style={{ paddingRight: "30px",verticalAlign:"top"}}> {item.quantity}</td>

                       <td> ${(item.price * item.quantity).toFixed(2)}</td>

                       <td>
                       {item && item.cartItemID && item.cartItemID.substring(0, 3) === 'new' &&(
                          <td>
                            <Button
                              icon={<DeleteOutlined />}
                              onClick={() => handleRemoveItem(order.orderID, item.cartItemID)}
                              className="idelete"
                            />
                          </td>
                        )}
    </td>
                 
     </tr>
                    
                    ))}

  
                
          <tr className="text-secondary text-bold tot">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>
                      ${order.orderitems.reduce((total, item) => {
  // Calculate the total price of addons for this item
  const addonsTotal = item.addonID.reduce((addonTotal, addon) => {
    return addonTotal + (addon.price * item.quantity); // Multiply addon price by item quantity
  }, 0);

  // Calculate the total price of the item including addons
  const itemTotal = (item.price * item.quantity) + addonsTotal;

  return total + itemTotal; // Add the total price of the item to the accumulator
}, 0).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              
              </div>
          )}
              </React.Fragment>
            ))
          )}
          <br />
        
        </div>
      </div>
      <Holdpro.Provider value={selectedOrderId!}>
      {showAddNewModal && <AddNew orderId={selectedOrderId!} onClose={handleAddNewClose}  handleAddOrder={handleAddOrder} />}
      </Holdpro.Provider>
     
    </div>
  );
};

export default Hold;
