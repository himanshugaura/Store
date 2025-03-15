import React from 'react'
import { MdCurrencyPound, MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
const CardItem = ({item ,}) => {

    const dispatch = useDispatch();

    

    const title = item.title.length > 40 ? item.title.substring(0, 40) + "..." : item.title;
    const description = item.description.substring(0, 80) + "...";
    const price = item.price;
    const img = item.image;


    function removeFromCart ()
    {
        dispatch(remove(item.id));
        toast.success("Removed from cart");
    }

  return (
      <div className="bg-white rounded-2xl shadow-lg w-full flex flex-col items-center transform transition duration-300 p-3 hover:scale-110 hover:shadow-2xl gap-4">
               {/* Image Section */}
               <div className="w-full h-[180px] flex justify-center items-center">
                   <img src={img} alt={title} className="object-contain h-full max-w-full rounded-lg" />
               </div>
   
               {/* Text Section */}
               <div className="w-full text-center">
                   <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                   <p className="text-sm text-gray-600">{description}</p>
               </div>
   
               {/* Price & Button Section */}
               <div className="w-full flex justify-between items-center mt-4">
                   <p className="text-lg font-bold text-green-600 flex items-center">
                       <MdCurrencyPound className="mr-1" /> {price}
                   </p>
                   
                      
                   <div className='cursor-pointer' onClick={removeFromCart}>
                    <MdDelete  size={25}/>
                   </div>
               </div>
           </div>
  )
}

export default CardItem