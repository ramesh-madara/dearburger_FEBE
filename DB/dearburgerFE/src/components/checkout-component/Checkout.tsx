import React, { useEffect } from "react";
import { RootState } from "../../state/store/store";
import { useSelector } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import "./Checkout-styles.css";
import { Select } from "antd";
import CheckoutTakeoutForm from "../checkout-takeout-component/Checkout-takeout";
import CheckoutDineInForm from "../checkout-dinein-component/Checkout-dinein";
import CheckoutDeliverForm from "../checkout-deliver-component/Checkout-deliver";
interface CheckoutProps {
  toggleVisibility: () => void;
  checkoutMethod?: any;
}

export const Checkout: React.FC<CheckoutProps> = ({
  toggleVisibility,
  checkoutMethod,
}) => {
  console.log("checkout method:", checkoutMethod);
  let GrandTotalPrice: number = 0;
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const updatedCartItems = cartItems.map((item: any) => {
    const totalItemPrice: number = Number(item.price) * Number(item.quantity);
    const itemAddons = item.addonID;
    let totalAddonPrice: number = 0;
    if (itemAddons && itemAddons.length > 0) {
      itemAddons.map((itemAddon: any) => {
        totalAddonPrice += itemAddon.price * item.quantity;
      });
    }
    return {
      ...item,
      TotalPrice: totalItemPrice + totalAddonPrice,
    };
  });
  updatedCartItems?.map((item) => {
    GrandTotalPrice += item.TotalPrice;
  });
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };
  return (
    <div className="dine-in-expanded-item-shadow">
      <div className="dine-in-item">
        <div className="dine-in-item-inner">
          <div className="dine-in-closeBtn mobileElement text-secondary">
            <CloseOutlined onClick={() => toggleVisibility()} />
          </div>
          <div className="dine-in-item-list">
            <div className="text-black descriptions">
              <table>
                <tbody>
                  {updatedCartItems.map((item, index) => {
                    return (
                      <React.Fragment key={item.cartItemID}>
                        <tr className={index % 2 === 0 ? "lightBG" : "darkBG"}>
                          <td className="text-secondary text-bold col-1">
                            {item.name + " x " + item.quantity + "pcs"}
                          </td>
                          <td className=" col-2">
                            {item.price + " x " + item.quantity + "pcs"}
                          </td>
                          <td className="col-3  text-right">
                            {item.price.valueOf() * item.quantity}
                          </td>
                        </tr>
                        {item.addonID?.map((addon: any, index2: number) => {
                          return (
                            <tr
                              className={index % 2 === 0 ? "lightBG" : "darkBG"}
                              key={addon.value + index2}
                            >
                              <td className="col-1 addonDetail">
                                <span className="text-spacer">--</span>
                                <span>{"-"}</span>
                                {addon.label}
                              </td>
                              <td className="col-2 addonDetail">
                                {addon.price.valueOf() +
                                  " x " +
                                  item.quantity +
                                  "pcs"}
                              </td>
                              <td className="col-3 addonDetail text-right">
                                {addon.price.valueOf() * item.quantity}
                              </td>
                            </tr>
                          );
                        })}
                        <tr className={index % 2 === 0 ? "lightBG" : "darkBG"}>
                          <td className="col-1"></td>
                          <td className="col-2"></td>
                          <td className="col-3 DetailtotalPrice text-right text-primary">
                            {item.TotalPrice}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="grand-total-price bg-secondary">
              <span>Total Price :</span>
              <span>{GrandTotalPrice ? +GrandTotalPrice.toFixed(2) : 0.0}</span>
            </div>
          </div>
          <div className="dine-in-customization">
            <div className="dine-in-closeBtn desktopElement rc text-secondary">
              <CloseOutlined onClick={() => toggleVisibility()} />
            </div>
            {checkoutMethod === "takeout" && (
              <CheckoutTakeoutForm totalPrice={GrandTotalPrice} />
            )}
            {checkoutMethod === "dinein" && (
              <CheckoutDineInForm totalPrice={GrandTotalPrice} />
            )}
            {checkoutMethod === "deliver" && (
              <CheckoutDeliverForm totalPrice={GrandTotalPrice} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
