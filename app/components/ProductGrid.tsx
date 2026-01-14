// components/ProductGrid.tsx
import React, { useEffect, useState } from "react";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {products.map((p: any) => (
        <div key={p.id} className="border p-3 rounded">
          {p.image_url && <img src={p.image_url} alt={p.name} className="mb-2" />}
          <h2 className="font-bold">{p.name}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
