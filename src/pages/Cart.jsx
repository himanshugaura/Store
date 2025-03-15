import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardItem from '../components/CartItem';
import { MdCurrencyPound } from 'react-icons/md';

const Cart = () => {
    const cart = useSelector((state) => state.cart);  
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center p-10">
            {cart.length === 0 ? (
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Cart is Empty</h1>
                    <Link to="/">
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Add Items
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="w-full max-w-2xl">
                    {/* Cart Items */}
                    <div className="flex flex-col gap-4">
                        {cart.map((item, index) => 
                            {
                               return <CardItem key={index} item={item} />
                            }
                            
                        )}
                    </div>

                    {/* Summary Section */}
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Your Cart Summary</h2>
                        <p className="text-lg mt-2">Total Items: {cart.length}</p>
                        <p className="text-lg font-semibold flex items-center">Total Amount: <MdCurrencyPound className="mr-1" /> {totalAmount.toFixed(2)}</p>
                        <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
