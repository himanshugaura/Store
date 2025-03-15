import React from 'react';
import toast from 'react-hot-toast';
import { MdCurrencyPound } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ item }) => {
    const title = item.title.length > 40 ? item.title.substring(0, 40) + "..." : item.title;
    const description = item.description.substring(0, 80) + "...";
    const price = item.price;
    const img = item.image;

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item)); 
        toast.success("Item added to cart");
    };

    const removeFromCart = () => {
        dispatch(remove(item.id));   
        toast.error("Item removed from cart");
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 p-4 hover:scale-105 hover:shadow-2xl gap-4
                        w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto">
            
            {/* Image Section */}
            <div className="w-full h-48 flex justify-center items-center">
                <img src={img} alt={title} className="object-contain h-full max-w-full rounded-lg" />
            </div>

            {/* Text Section */}
            <div className="w-full text-center">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Price & Button Section */}
            <div className="w-full flex justify-between items-center mt-4 px-4">
                <p className="text-lg font-bold text-green-600 flex items-center">
                    <MdCurrencyPound className="mr-1" /> {price}
                </p>
                
                {cart.some((p) => p.id === item.id) ? (
                    <button 
                        className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition hover:bg-red-700"
                        onClick={removeFromCart}
                    >
                        Remove From Cart
                    </button>
                ) : (
                    <button 
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition hover:bg-blue-700"
                        onClick={addToCart}
                    >
                        Add To Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
