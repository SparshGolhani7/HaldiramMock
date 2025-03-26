import React, { useContext } from 'react';
import { AllContext } from '../context/AllContext';
import "../Styles/CompleteProfile.css";
import {FaExternalLinkAlt} from "react-icons/fa"


import { MdLocationOn } from "react-icons/md";

const CompleteProfile = () => {
    const { storeInfo  } = useContext(AllContext);
    const url1 = storeInfo.config?.completeUrl;
    const url2 = storeInfo.config?.shopNowUrl;
    const url3 = storeInfo.config?.storeLocatorUrl;

    const handleRedirectToCompleteProfile = () => {
        window.location.href = url1;
    };


    const handleRedirectToShopNow = () => {
      window.location.href = url2;
  };

  
  const handleStoreLocatorByMap = () => {
    window.location.href = url3;
};



    return (
        <div className="completeProfile-container">
            <div className="completeProfile-card">
                <p className="completeProfile-text">Complete your profile and win exciting prizes!</p>
                <button className="completeProfile-button" onClick={handleRedirectToCompleteProfile}>
                    <strong>Complete Now</strong>
                </button>
                    </div>
                    <div className='socialMedia-card'>
                  {storeInfo?.socialLinks?.map((links)=>(
                    // <img key={links.id} src={links.icon} alt={links.platform} className="social-icons"></img>
                    <div  className="social-icons">
                    <a key={links.id} href={links.url} target="_blank" rel="noopener noreferrer">
                    <img src={links.icon} alt={links.platform} />
                  </a>
                  </div>
                  ))}
                  <p>Find us on your favourite social media</p>
                </div>

                <div className='shopNow-card'>
                  <div className='leftDescription'>
                  <b>Check our latest collection</b>
                  <p>Shop online on our website</p>
                  </div>
                  <div className='RightShopNow'>
                    <button className='shopNow-button' onClick={handleRedirectToShopNow}>
                      Shop-Now <FaExternalLinkAlt className="shopNow-icon" /></button>
                  </div>
                </div>

                <div className='store-card'>
                <p> Find your nearest stores</p>
                <button className='storeLocator-button'
                onClick={handleStoreLocatorByMap}> 
                <bold>Store Locator <MdLocationOn /></bold>
                </button>
                </div>
              
        </div>
    );
};

export default CompleteProfile;




// <div className="socialMedia-card">
// <div className="social-icons">
//   {Object.entries(storeInfo?.socialLinks || {}).map(([platform, url]) => (
//     <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
//       <img src={getSocialIcon(platform)} alt={platform} />
//     </a>
//   ))}
// </div>
// <p>Find us on your favourite social media</p>
// </div>