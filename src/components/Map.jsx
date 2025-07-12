import React from "react";
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const vegetables = ["Carrot", "Broccoli", "Spinach", "Potato"];
const dairy = ["Milk", "Cheese", "Yogurt", "Butter"];
const grains = ["Rice", "Wheat", "Oats", "Barley"];
function Map() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Fruit List</h2>
      <ul className="grid grid-cols-2 gap-4">
        {fruits.concat(vegetables).map((item, index) => (
          <li
            key={index}
            className="bg-yellow-300 text-green-700 p-4  rounded-xl shadow-md font-semibold "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
