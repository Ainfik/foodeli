import React from "react";

const menuItems = [
  {
    id: 1,
    name: "California Pizza",
    price: 7.5,
    image: "/images/pizza-1.png",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 6.5,
    image: "/images/pizza-2.png",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 8.0,
    image: "/images/pizza-3.png",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    price: 8.5,
    image: "/images/pizza-4.png",
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    price: 7.0,
    image: "/images/pizza-5.png",
  },
  {
    id: 6,
    name: "Veggie Pizza",
    price: 6.0,
    image: "/images/pizza-6.png",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {menuItems.map((item) => (
        <div key={item.id} className="card-menu border border-gray-200 rounded-xl py-6 px-6 m-4">
          <img className="w-50 mx-auto" src={item.image} alt={item.name} />
          <div className="description text-center mt-4">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
