import React from 'react';
import { Page, Text, View, Document, StyleSheet,Font} from '@react-pdf/renderer';
import MyCustomFont from "./fonts/SansitaSwashed-SemiBold.ttf";
import Anton from './fonts/Roboto-Regular.ttf';

Font.register({ 
  family: 'MyCustomFont',
  src: MyCustomFont
});
Font.register({ 
  family: 'Anton',
  src: Anton
});



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

interface BillProps {
  order: Order;

}


const styles = StyleSheet.create({
  page: {
    padding:4,
    flexDirection: 'column',
  },
  Header:{
    textAlign:'center',
    display:"flex",
    flexDirection: 'column',
    fontSize:"10",
 
  },

  orderstructure:{
    display:"flex",
    flexDirection:"row",
    marginTop:"10px",
    marginBottom:"5px",

  },

  orderdetails1:{
    display:"flex",
    flexDirection: 'column',
    justifyContent:"flex-start",
    fontSize:"10pt",
    margin:"auto",
  },

  orderdetails2:{
    display:"flex",
    flexDirection: 'column',
    justifyContent:"flex-end",
    margin:"auto",
    fontSize:"10pt",
  },

  status:{
    fontSize:"10pt",
    marginTop:"10px",
    marginBottom:"5px",
    padding: 2,
  },



  table: {
    width: 'auto',
    borderStyle: 'dotted',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop:"5px",
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomStyle: 'solid',
    borderBottomWidth: 0,
    borderBottomColor: '#000',
  },

  th: {
    flexDirection: 'row',
    borderBottomStyle: 'dotted',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  thcell: {
      fontSize:"11",
      flex: 1,
      padding: 2,
      borderRightStyle: 'dashed',
      borderRightWidth: 0,
      borderRightColor: '#000',
      textAlign: 'center',
  },


  tableCell: {
    flex: 1,
    padding: 2,
    fontSize: 10,
    borderRightStyle: 'dashed',
    borderRightWidth: 0,
    borderRightColor: '#000',
    textAlign: 'center',
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
  
  },
  totalAmount: {
    textAlign: 'right',
    
   
  },

  line: {
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop:"2px",
  },

  linecat: {
    marginBottom:"10px",
  },

});



const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  return hours + ':' + minutes + ' ' + ampm;
};

const Bill: React.FC<BillProps> = ({order}) => (
  <Document>
    <Page size="A7" style={styles.page}>

<View style={styles.Header}>
<Text id='logo' style={{fontWeight:"bold",fontSize:"18",fontFamily:"MyCustomFont"}}>Dear Burger</Text>
<Text style={{fontSize:"12pt"}}>*** Welcome to Dear Burger ***</Text>
<Text style={{fontSize:"10pt"}}>No.54/2, Ginthota, Galle </Text>
<Text style={{fontWeight:"bold"}}>T.P : 011 1234567</Text>
<Text>~ Enjoy Your Meal ~</Text>
</View>


<View style={styles.orderstructure}>

<View style={styles.orderdetails1} >
  <Text>Order Type : Take Away</Text>
  <Text style={{marginTop:"5px"}}>Date : {formatDate(Date.now())}</Text>
</View>

<View style={styles.orderdetails2} >
<Text>Order ID : {order.orderID}</Text>
<Text style={{marginTop:"5px"}} >Time : {formatTime(Date.now())}</Text>

</View>
</View>

  
    <View style={styles.table}>
      <View style={styles.th}>
          <Text style={styles.thcell}>Description</Text>
          <Text style={styles.thcell}>Qty</Text>
          <Text style={styles.thcell}>Price</Text>
        </View>
       {order.orderItems.map((item, index) => (
         <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCell}>Chicken Rice</Text>
          <Text style={styles.tableCell}>{item.orderQty}</Text>
          <Text style={styles.tableCell}>{item.itemPriceID}</Text>
         </View>
        ))}
    </View>




    <View style={styles.status}>
    <View style={styles.totalContainer}>
        <Text>Grand Total:</Text>
        <Text style={styles.totalAmount}>$600</Text>
    </View>

    <View style={styles.totalContainer}>
        <Text>Paid By:</Text>
        <Text style={styles.totalAmount} >Cash</Text>
    </View>
    </View>

<View style={styles.linecat}>
<View style={styles.line} />
<View style={styles.line} />
</View>



<View style={styles.Header}>
<Text style={{fontSize:"11",fontFamily:"Anton"}}>*** HAVE A NICE DAY ***</Text>
<Text style={{fontSize:"11pt",fontFamily:"Anton"}}>Every Bite is Dear to Us</Text>
<Text style={{fontWeight:"bold",fontFamily:"Anton"}}>....Visit Again....</Text>
</View>

<View style={{marginTop:"10px"}}>
<View style={styles.line} />
<View style={styles.line} />
</View>




    </Page>
  </Document>
);

export default Bill;
