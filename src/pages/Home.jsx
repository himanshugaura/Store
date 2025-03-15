import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Product from '../components/Product';

const API_URL = "https://fakestoreapi.com/products";

const Home = () => {

    const [loading , setLoading] = useState(false);
    const [item , setItem] = useState([]);

    async function fetchProductData ()
    {
        setLoading(true);
        try
        {
            const result = await fetch(API_URL);
            const data = await result.json();

            setItem(data);
            
        }catch(error)
        {
            toast.error("Problem in loading: Check your network ")
        }

        setLoading(false);
    }

    useEffect( () =>    
    {
        fetchProductData();
    },[])

  return (
    <div className='w-full min-h-screen flex  flex-wrap justify-center  px-10 py-10 gap-10'>
        {
            loading ? <Loader/> : 
            item.length > 0 ? 
            (
                item.map( (item) => (
                    <Product key = {item.id} item = {item} />
                )) 
            ) :
            <div>
                <p>No Data Found</p>
            </div>
        }
    </div>
  )
}

export default Home