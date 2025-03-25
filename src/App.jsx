
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Invoice from './components/Invoice'
// import SliderImages from './components/SliderImages'
import { AllProvider } from './context/AllContext'

function App() {


  return (  <AllProvider>
    <div className='app-container'>
  
      <Header/>
      {/* <SliderImages/> */}
      <Invoice/>
      <Footer/>   
    </div>
    </AllProvider>

  )
}

export default App
