import React, { useContext } from 'react'
import { AllContext } from '../context/AllContext'
import "../Styles/Invoice1.css"

const Invoice1 = () => {
    const {orders} = useContext(AllContext)
  return (
    <div className='invoice1-container'>

<div className='showDetailsInvoice-card'>
      <p><strong>Invoice</strong> #{orders?.orderInfo?.invoiceNumber}</p>
      
      </div>



    </div>
  )
}

export default Invoice1