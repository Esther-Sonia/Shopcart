import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#fff2e6] mx-10 mt-6 rounded-lg p-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-green-800">
          Grab Upto 50% Off On <br /> Selected Headphone
        </h2>

        <button className="mt-5 bg-green-700 text-white px-6 py-2 rounded">
          Buy Now
        </button>
      </div>

      <Image
        src="/banner/headphones.png"
        alt="Headphones"
        width={300}
        height={300}
      />
    </section>
  );
}

export default Hero;
