import React from "react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <Image
        src={props.image}
        alt={props.name}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="text-xs text-gray-400 mt-2">
        Gadget Accessories
      </p>

      <h3 className="text-sm font-medium mt-1">
        {props.name}
      </h3>

      <p className="text-green-700 font-bold mt-2">
        ${props.price}
      </p>

      <button className="mt-3 w-full bg-green-700 text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
