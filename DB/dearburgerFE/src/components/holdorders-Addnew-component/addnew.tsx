// addnew.tsx
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./addnew.css"; // Import CSS for AddNew component
import FilterSectionNew from "./filter-section-new";

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

interface Order {
  orderID: string;
  status: string;
  datetime: Date;
  orderitems: OrderItem[];
}


interface AddNewProps {
  orderId: string;
  onClose: () => void;
  handleAddOrder:(updatedOrders: Order[])=>void;
}

const AddNew: React.FC<AddNewProps> = ({ orderId, onClose,handleAddOrder }) => {
  return (
    <div className="add-new-modal">
     
          <h2 className="addHeader">Add New Item to Order ID : {orderId}</h2>
    
          <CloseOutlined onClick={onClose} className="close-btn" />
        
    
      <FilterSectionNew handleAddOrder={handleAddOrder}/>
    </div>
  );
};

export default AddNew;
