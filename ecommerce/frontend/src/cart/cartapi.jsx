import React from 'react'
import { useState , useEffect} from 'react'
const CartApi = () => {

    const[message, setMessage] = useState();
    const [error, setError] = useState(null);
    

    useEffect(() => {
      const  fetchData  = async () => {
        try {
          const response = await fetch("http://localhost:8000/cart/api");
          const data = await response.json();
          setMessage(data.message);
          
        } catch (error) {
          setError("Failed to fetch data!");
          console.error("Error", error);
        }
      }
      fetchData();
    }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Message from Backend: {message}</p>
      )}
    </div>
  )
}

export default CartApi
