import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar(){
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b">
      <h1 className="text-xl font-bold text-green-700">SHOPCART</h1>

      <ul className="flex gap-6 text-sm font-medium">
        <li className="text-green-700 cursor-pointer">Home</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Contact</li>
        <li className="text-red-500 cursor-pointer">Hot Deal</li>
      </ul>

      <div className="flex items-center gap-4 text-lg">
        <FiSearch />
        <FiShoppingCart />
        <FiUser />
      </div>
    </nav>
  );
}

export default Navbar;
