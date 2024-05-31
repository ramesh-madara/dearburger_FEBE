import React, { useState, useEffect } from "react";
import Hold from "./hold.tsx";
import "./holdorder.css";


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

const HoldOrder: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orders, setOrders] = useState<Order1[]>([]);
  const [ApOrders, setApOrders] = useState<Order2[]>([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://admin.dearburger.link/apidb/orders/hold", {
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token,
          },
        });

        if (response.ok) {
          const data: Order2[] = await response.json();
          setApOrders(data);
        } else {
          console.error("Failed to fetch orders", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array means this effect runs once after initial render




  const toggleVisibility = () => {
    setShowCheckout(!showCheckout);
  };

  const handleAddOrder = (updatedOrders: Order1[]) => {
    setOrders(updatedOrders); // Update state using the hook
    localStorage.setItem("holdOrders", JSON.stringify(updatedOrders));
  };


  const handleCancelOrder = (orderId: string) => {
    const updatedOrders = orders.filter((order) => order.orderID !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("holdOrders", JSON.stringify(updatedOrders));
  };

  const handleRemoveItem = (orderId: string, cartItemID: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.orderID === orderId) {
        order.orderitems = order.orderitems.filter((item) => item.cartItemID !== cartItemID);
      }
      return order;
    });
    setOrders(updatedOrders);
    localStorage.setItem("holdOrders", JSON.stringify(updatedOrders));
  };


  const revomeCartID = (orderId: string) => {
    const HOrder: Order1[] = JSON.parse(localStorage.getItem("holdOrders") || "[]");

    const orderUpdate = HOrder.find((order) => order.orderID === orderId);

      if (orderUpdate) {
        // Iterate over the orderitems and set cartItemID to an empty string
        orderUpdate.orderitems.forEach((item) => {
          item.cartItemID = "";
        });

        // Update the holdOrders in localStorage
        setOrders(HOrder);
        localStorage.setItem("holdOrders", JSON.stringify(HOrder));
      }

  };



  

  return (
    <div>
      <button className="text-secondary navhold" onClick={toggleVisibility}>
        Hold Orders
      </button>
      {showCheckout && (
        <div>
          <Hold ApOrders={ApOrders} orders={orders}   toggleVisibility={toggleVisibility} handleCancelOrder={handleCancelOrder} handleRemoveItem={handleRemoveItem} handleAddOrder={handleAddOrder}  revomeCartID={revomeCartID}/>
        </div>
      )}
    </div>
  );
};

export default HoldOrder;
