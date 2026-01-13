import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid(){
  return (
    <div className="grid grid-cols-5 gap-6 px-10 mt-6">
      <ProductCard
        name="Apple AirPods 3rd generation"
        price="1700"
        image="/products/airpods.png"
      />

      <ProductCard
        name="Canon EOS 250D Camera"
        price="750"
        image="/products/camera.png"
      />
    </div>
  );
}

export default ProductGrid;
