import { createContext , useState, useEffect } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [storeInfo, setStoreInfo] = useState({});

  useEffect(() => {
    const fetchStoreInfo = async () => {
        try {
          const response = await fetch("http://localhost:5075/storeInfo");
          const data = await response.json();
          setStoreInfo(data);
        } catch (error) {
          console.error("Error fetching storeInfo:", error);
        }
      };
  
      fetchStoreInfo(); 
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
        try {
          const response = await fetch("http://localhost:5076/orderDetails");
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error("Error fetching Orders:", error);
        }
      };
  
      fetchOrders(); 
  }, []);


  return (
    <AllContext.Provider value={{orders,storeInfo}}>
      {children}
    </AllContext.Provider>
  );
};


