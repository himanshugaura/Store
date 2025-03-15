import React, { useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-12 w-auto md:h-16" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
                    <NavLink to="/cart" className="hover:text-gray-300">
                        <IoMdCart size={30} />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
                    <NavLink to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/cart" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                        <IoMdCart size={30} />
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
