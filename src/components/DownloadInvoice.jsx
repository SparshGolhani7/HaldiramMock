import React, { useContext, useRef } from 'react';
import { AllContext } from '../context/AllContext';
import "../Styles/DownloadInvoice.css";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadInvoice = () => {
    const { orders, storeInfo } = useContext(AllContext);
    const invoiceRef = useRef(null);

    const downloadInvoiceAsPDF = () => {
        const input = invoiceRef.current;
        if (!input) return;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save(`Invoice_${orders?.orderInfo?.invoiceNumber || 'download'}.pdf`);
        });
    };

    return (
        <div className='downloadInvoice-container'>
           
            <div className='hidden-invoice' ref={invoiceRef}>
                <img src={storeInfo?.config?.logo} alt="Haldiram's Logo" />
                <p>{orders?.store?.name} ({orders?.store?.invoiceType})</p>
                <h2>Haldiram Ethnic Foods Private Limited</h2>
                <p><strong>Invoice #:</strong> {orders?.orderInfo?.invoiceNumber}</p>
                <p><strong>Date:</strong> {orders?.dateTime}</p>
                <p><strong>Total Amount:</strong> ₹{orders?.orderInfo?.amountPaid}</p>
                <hr />
                <h3>Order Summary:</h3>
                {orders?.items?.map((item, index) => (
                    <div key={index}>
                        <p><strong>{item.name}</strong></p>
                        <p>Qty: {item.quantity.value} {item.quantity.unit}</p>
                        <p>Total: ₹{item.total}</p>
                        <hr />
                    </div>
                ))}
            </div>

            <button className='download-button' onClick={downloadInvoiceAsPDF}>
                <b>Download Invoice</b>
            </button>
        </div>
    );
};

export default DownloadInvoice;

//  Gaur City
//  Gaur City Sector-04, Shop No. A-GF-01 and A-FF-01, Plot No-C1A/GH-01, Greater 
// , , , Noida West, Gaur City1, Greater Noida, Gautambuddha Nagar Uttar Pradesh 201308
//  Ph No. : 8588008333
//  GSTIN No. 09AAFCA0665B1Z2
//  Registered Address:
//  Village Kherki Daula, Delhi Jaipur Highway, Gurugram- 122001
//  State Code: 09
//  CIN: U15122HR2003PTC118711
//  FSSAI NO: 12723055001091