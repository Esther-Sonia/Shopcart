import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryTabs />
      <ProductGrid />
    </>
  );
}

export default HomePage;
