import React from "react";
const categories = [
  {
    name: "Fruits",
    items: ["Apple", "Banana", "Mango"],
  },
  {
    name: "Vegetables",
    items: ["Carrot", "Potato", "Tomato"],
  },
  { name: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
];
function Nested() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#000000] flex items-center justify-center">
        Categories
      </h2>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-red-700">
              {category.name}
            </h3>
            <ul className="grid grid-cols-3 gap-3 mt-2">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-emerald-400 text-blue-800 p-3 rounded-2xl shadow-sm font-bold "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nested;
