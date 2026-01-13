import React from "react";

function CategoryTabs() {
  return (
    <div className="flex items-center gap-4 px-10 mt-8">
      <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm">
        Gadget
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
        Appliances
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
        Refrigerators
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
        Others
      </button>

      <span className="ml-auto text-sm cursor-pointer">See all</span>
    </div>
  );
}

export default CategoryTabs;

