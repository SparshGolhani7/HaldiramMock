import React, { useContext } from 'react';
import { AllContext } from '../context/AllContext';
import '../Styles/Invoice.css';

const Invoice = () => {
  const { orders, storeInfo } = useContext(AllContext);

  const handleRedirect = () => {
    window.location.href = "https://ebill.haldiram.com/d/receipt-login?ch=1";
  };

  return (
    <div className="invoice-container">
     
        {/* Feedback Message inside Card */}
        <div className='feedback-card'>
    Thank you for submitting your feedback

        </div>
     

        {/* Amount Details */}
        <div className="amount-card">
        
          <h3>Amount Paid</h3>
          <span>{orders.dateTime}</span>
          <span>{orders.amountPaid}</span>
          <span>3 items</span>
        

        </div>

        {/* Customer Details */}<div className='customerDetail-card'>
        <p>Dear {orders.customer?.name} ({orders.customer?.contact})</p>

        {/* Show Details Button */}
        <button className="show-details" onClick={handleRedirect}>Show details</button>
        </div>
      
      <div className='shopName-card'>
        <div>{orders.store?.name} {orders.store?.invoiceType}</div> 

        <span>Order Number:{orders.orderInfo?.orderNumber}</span>
        <span>Token Number:{orders.orderInfo?.tokenNumber}</span>


      </div>


    </div>
  );
};

export default Invoice;
