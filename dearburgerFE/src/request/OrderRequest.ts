
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


export const sendOrder  = async (data: HoldOrderData) => {

  const url = `https://admin.dearburger.link/apidb/orders`;
  const token = sessionStorage.getItem("token")
  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send hold order");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Error sending hold order: ${/*error.message*/error}`);
  }
};
