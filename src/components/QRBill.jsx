import React, { useContext } from 'react'
import { AllContext } from '../context/AllContext'
import "../Styles/QRBill.css"

const QRBill = () => {
    const {orders} = useContext(AllContext)
  return (
    <div className='QR-container'>
        <div className='QR-card'>
        Scan below QR to get bill info
        <button className='viewDetails-button'><bold>View Details</bold></button> 
        </div>
    </div>
  )
}

export default QRBill