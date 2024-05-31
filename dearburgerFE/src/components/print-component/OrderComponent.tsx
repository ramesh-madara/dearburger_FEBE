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

 

import React, { useState } from 'react';
import { PDFViewer, pdf } from '@react-pdf/renderer';
import Bill from './Bill';
import Modal from './Modal';
import './Modal.css';

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

const fetchOrderData = async (orderID: string): Promise<Order | null> => {
  const token = sessionStorage.getItem("token"); // Replace with your actual token

  try {
    const response = await fetch(`https://admin.dearburger.link/apidb/orders/hold`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const orders: Order[] = await response.json();
    console.log(orders);
  
    return orders.find(order => order.orderID === orderID) || null;
 
  } catch (error) {
    console.error('Error fetching order data:', error);
    return null;
  }
};

const OrderComponent: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, setWidth] = useState('auto'); // State to manage display width

  const handleFetchOrder = async () => {
    setLoading(true);
    const orderData = await fetchOrderData('3292');

    setOrder(orderData);
    setLoading(false);
    setIsModalOpen(true);
  };

  const handleGenerateBill = async () => {
    await handleFetchOrder();
  };

  const handleDownload = async () => {
    if (order) {
      const blob = await pdf(<Bill order={order}  />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `order_${order.orderID}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handlePrint = async () => {
    if (order) {
      const blob = await pdf(<Bill order={order} />).toBlob();
      const url = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      iframe.style.display = 'none';
      iframe.src = url;
      iframe.onload = () => {
        iframe.contentWindow?.print();
        document.body.removeChild(iframe);
        URL.revokeObjectURL(url);
      };
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleGenerateBill}>Generate Bill</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        order && isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <div>
              <PDFViewer width="100%" height="500px">
  
                <Bill order={order} />
         
          
              </PDFViewer>
              <div>
                <button className='btpt'  onClick={() => { setWidth('58mm'); handlePrint(); }}>Print</button>
                <button className='btpt' onClick={() => { setWidth('58mm'); handleDownload(); }}>Download</button>
                <button className='btpt' onClick={handleModalClose}>Cancel</button>
              </div>
            </div>
          </Modal>
        )
      )}
    </div>
  );
};

export default OrderComponent;
