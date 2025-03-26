import React, { useContext } from 'react';
import { AllContext } from '../context/AllContext';
import "../Styles/Header.css";

const Header = () => {
  const { storeInfo } = useContext(AllContext);
 
console.log(storeInfo,"storeInfor");
// console.log(typeOf (storeInfo?.config),"TYPE");

  return (
    
    <div className="header-container">
      <div className='header-card'>
             <img src={storeInfo?.config?.logo} alt="Haldiram's Logo" className="header-logo" />
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"></span>
      </label>
      </div>
 
    </div>
    
  );
};

export default Header;




