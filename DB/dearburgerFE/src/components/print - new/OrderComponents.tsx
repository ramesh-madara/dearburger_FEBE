import React from 'react';

interface OrderItem {
  menuItemID: string;
  orderTypeID: string;
  orderQty: string;
  itemPriceID: string;
  paymentTypeID: string;
  optionID: string;
}

interface Order {
  orderID: string;
  orderStatus: string;
  orderDatetime: string;
  orderItems: OrderItem[];
}


const OrderComponent: React.FC = () => {
  const fetchOrder = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch('https://admin.dearburger.link/apidb/orders/hold', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.error('Failed to fetch orders');
        return;
      }

      const orders = await response.json();
      const order = orders.find((order:Order) => order.orderID === "3292");

      if (order) {
        printBill(order);
      } else {
        console.error('Order not found');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB'); // dd/mm/yyyy
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }); // HH:MM am/pm
    return { date, time };
  };

  const printBill = (order: any) => {
    const { date, time } = getCurrentDateTime();
    const printWindow = window.open('', '_blank', 'width=58mm,height=auto');
    if (printWindow) {
      printWindow.document.write(`

 <head>
 <style>
 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300..900&display=swap');




.container{
  width: 58mm !important;
  border: 1px solid black;
  margin: 2;
  padding: 5px;
  font-family: 'Roboto', Arial, sans-serif;

}

.bill-items {

  margin-bottom: 10px;
  border-bottom: 1px dashed black;
  width:100%



}
.bill-items th {
  border-bottom: 1px dashed black;
  padding: 8px 8px 4px 0px;
  text-align: center;
  font-size:11pt;
  font-weight:500;
}
td {
  text-align:left;
  font-size:10pt;
  word-wrap: break-word;
  max-width:70px; 
  padding-right:1px;

}
.twrap{
  width:100%;


}
.bill-footer {
  text-align: center;
  margin-top: 10px;
  font-size:11pt;
  margin-bottom: 10px;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  font-size:11pt;
  margin-bottom:10px;
}
.order {
  display: flex;
  flex-direction: row;
  font-size: 9pt;
  justify-content: space-between;
}
.order-column {
  display: flex;
  flex-direction: column;
}

.order-column.align-end {
 
  text-align:left;
}

.line {

  border-bottom:1px dashed;
  padding:1px;

}
.payment{
  margin-bottom:10px;
  font-size:11pt;

}

 </style>
 </head>
 <body>
      <div class ="container">

            <div class="details">
              <div style="font-family:Sansita Swashed;font-weight:600;font-size:20pt">Dear Burger</div>
              <div>** Welcome to Dear Burger **</div>
              <div style="font-size:10pt">No.52, Ginthota, Galle</div>
              <div style="font-size:10pt">T.P : 011-1234567</div>
              <div style="font-size:10pt">~ Enjoy Your Meal ~</div>
            </div>


            <div class="order">
              <div class="order-column">
                <div style="padding:1px">Order Type: Take Away</div>
                <div style="padding:1px">Date: ${date}</div>
              </div>
              <div div class="order-column align-end">
                <div style="padding:1px">Order ID: ${order.orderID}</div>
                <div style="padding:1px">Time: ${time}</div>
              </div>
            </div>

<div class="twrap">
            <table class="bill-items">
              <thead>
                <tr>
                  <th style="text-align:left">Description</th>
                  <th style="text-align:center">Qty</th>
                  <th style="text-align:center">Price</th>
                </tr>
              </thead>
              <tbody>
                ${order.orderItems.map((item: any) => `
                  <tr>
                    <td>Cheese Koththu - Large</td>
                    <td style="text-align:center">${item.orderQty}5</td>
                    <td style="text-align:center">${item.itemPriceID}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            </div>


            <div class="payment">
              <div style="margin:2px">Grand Total : $600</div>
              <div style="margin:2px">Paid By : Cash</div>
            </div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="bill-footer">
              <div>*** HAVE A GREAT DAY ***</div>
              <div>Every Bite is Dear to Us</div>
              <div>...Visit Again...</div>
            </div>
            <div class="line"></div>
            <div class="line"></div>
            </div>


          </body>
      
      `);
  
      printWindow.document.close();
     //  printWindow.focus();
  
      printWindow.onafterprint = () => {
       printWindow.close();
      };
  
   // printWindow.print();
    } else {
      console.error('Failed to open print window');
    }
  };
  

  return (
    <div>
      <button onClick={fetchOrder}>Fetch and Print Order</button>
    </div>
  );
};

export default OrderComponent;
