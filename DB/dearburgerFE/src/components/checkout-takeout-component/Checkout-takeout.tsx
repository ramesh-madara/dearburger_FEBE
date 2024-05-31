import React, { useState } from "react";
import { Button, Form, Input, Select, TimePicker, InputNumber,DatePicker,message } from "antd";
import "./Checkout-takeout-styles.css";
import { removeCartItems } from "../../state/store/store";
import { useDispatch } from "react-redux";
import { sendOrder } from "../../request/OrderRequest";

const { Option } = Select;
interface CheckoutTakeoutProps {
  totalPrice: number;
}
interface FormData {
  name: string;
  phone: string;
  paymentType: string;
  time: string;
  date: string;
  cash: number;
  change: number;
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

const CheckoutTakeoutForm: React.FC<CheckoutTakeoutProps> = ({
  totalPrice,
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    paymentType: "",
    time: "",
    date:"",
    cash: 0,
    change: 0,
  });

  const [showCashFields, setShowCashFields] = useState<boolean>(false);

  const handlePaymentTypeChange = (value: any, event: any) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentType: value,
      cash: value === "visa/master" ? 0 : prevData.cash,
      change: value === "visa/master" ? 0 : prevData.change,
    }));
    setShowCashFields(value === "cash");
    console.log(formData);
  };
  const setChange = (value: any) => {
    const change = value.cash - totalPrice;
    setFormData(() => ({
      ...formData,
      cash: value.cash,
      change: change,
    }));
    form.setFieldsValue({
      formData,
    });
    console.log(formData);
  };


  const dispatch = useDispatch();

  const handleFormSubmit = () => {
  
    try {
      form.validateFields().then(() => {
      const existingCart = localStorage.getItem("cartItems");
      let cartItems: any[] = []; // Corrected type to match actual data

      if (existingCart) {
        cartItems = JSON.parse(existingCart);
      }

      if (cartItems.length > 0) {
 
      const uniqueId = Math.floor(Math.random() * 10000) + 1; // Generate random 8-digit order ID

      const orderData: HoldOrderData = {
        orderID: uniqueId.toString(), // You can generate this if needed
        orderStatus: "success",
        orderDatetime: new Date(),
        orderItems: cartItems.map((item: any) => ({
          menuItemID: item.foodItemID,
          orderTypeID:"take-away",
          orderQty: item.quantity,
          itemPriceID: item.price,
          paymentTypeID:formData.paymentType,
          optionID:item.size,
         
        })),
     
      };

   
      sendOrder (orderData) // Call the sendHoldOrder function with order data
      .then((response) => {
        alert(response);

        form.resetFields();
        setFormData({
          name: "",
          phone: "",
          paymentType: "",
          time: "",
          date: "",
          cash: 0,
          change: 0,
        });
  
  
       dispatch(removeCartItems());

      })
      .catch((error) => {
        // Handle error if needed
        alert("error is here"+error);
      });

 

    }else{
      message.warning("Your Cart is Empty!")
    }

  }).catch(() => {
    // Form is not valid, display error message
    message.error("Please fill out all required fields.");
  });

    } catch (error) {
      console.error("Error holding order:", error);
      message.error("An error occurred while holding the order. Please try again.");
    }

  };

  return (
    <Form
      className="formCheckout"
      form={form}
      layout="vertical"
      onFinish={handleFormSubmit}
    >
      <div>{formData.cash + "-" + formData.change}</div>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please select your Name" }]}
      >
        <Input
          placeholder="Please select a Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please enter your Phone" }]}
      >
        <Input
          placeholder="Please enter your Phone"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Payment Type"
        name="paymentType"
        rules={[{ required: true, message: "Please select a payment type" }]}
      >
        <Select
          placeholder="Please select a payment type"
          onSelect={(value, event) => handlePaymentTypeChange(value, event)}
        >
          <Option value="cash">Cash</Option>
          <Option value="visa/master">Visa/Master</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Time"
        name="time"
        rules={[{ required: true, message: "Please select a time" }]}
      >
        <TimePicker
          onChange={(e) =>
            setFormData({ ...formData, time: e.format("HH:mm") })
          }
        />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please select a date" }]}
      >
        <DatePicker
          onChange={(e) =>
            setFormData({ ...formData, date: e.format("YYYY-MM-DD") })
          }
        />
      </Form.Item>
      {showCashFields && (
        <>
          <Form.Item
            label="Cash"
            name="cash"
            rules={[{ required: true, message: "Enter the Cash Amount " }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Enter the Cash Amount"
              onChange={(value) =>
                setChange({
                  ...formData,
                  cash: typeof value === "number" ? value : 0,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label="Change"
            name="change"
            rules={[{ required: true, message: "Enter the Change Amount" }]}
          >
            <InputNumber style={{ width: "100%" }} value={formData.change} />
          </Form.Item>
          <input type="text" readOnly value={formData.change} />
        </>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CheckoutTakeoutForm;
