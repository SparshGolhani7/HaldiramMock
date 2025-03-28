import './App.css'
import CompleteProfile from './components/CompleteProfile'
import DownloadInvoice from './components/DownloadInvoice'
import Footer from './components/Footer'
import Header from './components/Header'
import Invoice1 from './components/Invoice1'
import Order from './components/Order'
import QRBill from './components/QRBill'
// import SliderImages from './components/SliderImages'
import { AllProvider } from './context/AllContext'

function App() {
  return (
    <AllProvider>
      <div className="layout-container">
        
        <Header />

        {/* Scrollable Main Content */}
        <main className="content">
          {/* <SliderImages/> */}
          <Order />
          <Invoice1/>
          <DownloadInvoice/>
          
          <CompleteProfile />
          <QRBill/>
        </main>

        <Footer /> 

      </div>
    </AllProvider>
  )
}

export default App


