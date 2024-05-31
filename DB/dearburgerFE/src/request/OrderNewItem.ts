
interface SendFood {
      menuItemID: string;
      orderTypeID: string;
      orderQty: number;
      itemPriceID: string;
      paymentTypeID: string;
      optionID: string;
  }[];



export const sendFoodItemsOrder = async (orderId: string, foodItems:SendFood[]) => {

  const url = `http://localhost/api/orders/fooditems`; // Adjust the URL according to your API endpoint for food items
  const token = sessionStorage.getItem("token");

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({orderId,foodItems}),
    });

    if (!response.ok) {
      throw new Error("Failed to send food items order");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Error sending food items order: ${error}`);
  }
};
