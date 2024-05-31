
export const updateOrderStatus = async (orderId: string, status: string) => {

   const url = `http://localhost/api/orders/update`;
   const token = sessionStorage.getItem("token")
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({ orderId, status }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update order status');
      }
  
      return await response.json(); // Assuming API returns some data
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  };
  