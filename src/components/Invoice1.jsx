import React, { useState, useContext } from "react";
import { AllContext } from "../context/AllContext";
import "../Styles/Invoice1.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Invoice1 = () => {
  const { orders } = useContext(AllContext);
  const [showDetails, setShowDetails] = useState(true);

  const toggleButton = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="invoice1-container">
      <div className="showDetailsInvoice-card">
        <p>
          <strong>Invoice</strong> #{orders?.orderInfo?.invoiceNumber}
        </p>

        {showDetails == true ? (
          <div>
            {orders?.items?.map(
              (item, index) =>
                index < 2 && (
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      QTY. {item.quantity.value} {item.quantity.unit}
                    </p>
                    <p>Total {item.total}</p>
                  </div>
                )
            )}
            <button onClick={toggleButton}>Show Details</button>
          </div>
        ) : (
          <div>
            {orders?.items?.map((item) => (
              <div>
                <h4>{item.name}</h4>
                <p>Price ₹{item.price}</p>

                <p>
                  QTY. {item.quantity.value} {item.quantity.unit}
                </p>
                <p>
                  GST <AiOutlineInfoCircle /> ₹{item.gst}{" "}
                </p>
                <p>Total ₹{item.total}</p>
              </div>
            ))}
            <hr />
            <p>Total Amount ₹{orders.amountPaid}</p>
            <p>Amount Payable ₹{orders.amountPaid}</p>
            <hr />
            <h1>Payment Mode</h1>
            <p>
              {orders.payment?.method} ₹{orders.payment?.amountPaid}
            </p>
            <p>Total Amount Paid ₹{orders.payment?.amountPaid}</p>
            <hr />
            <p>Tax Summary</p>
            <h2>
              <pre>Tax Taxable Amt Rate Tax Amount</pre>{" "}
            </h2>

            {orders.taxSummary?.map((tax) => (
              <div>
                <pre>
                  {tax.type} ₹{tax.taxableAmount} {tax.rate} ₹{tax.taxAmount}
                </pre>
              </div>
            ))}

            <p>Returned Against: {orders.returnedAgainst}</p>

            <button onClick={toggleButton}>Hide Details</button>

        
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice1;
