import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  TimePicker,
  InputNumber,
  DatePicker,
} from "antd";
import "./Checkout-deliver-styles.css";
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

const CheckoutDeliverForm: React.FC<CheckoutTakeoutProps> = ({
  totalPrice,
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    paymentType: "",
    time: "",
    date: "",
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

  const handleFormSubmit = () => {
    console.log("Form Data:", formData);
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

export default CheckoutDeliverForm;
