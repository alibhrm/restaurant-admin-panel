import { GiAvocado } from "react-icons/gi";
import Restaurant from "@/assets/images/Restaurant.jpg";
import map from "@/assets/images/map.png";
import restaurants from "@/data/restaurants.json";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";

const Restaurants = () => {

  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 pr-10">
        {restaurants.map((item, index) => (
          <div className="flex w-full rounded-xl bg-white shadow m-10" key={index}>
            <img src={Restaurant} alt="" className="h-48 rounded-xl" />
            <div className="w-full">
              <div className="font-bold text-xl flex justify-between p-5">
                Avo Burger
                <GiAvocado
                  size={24}
                  className={`${
                    !item.isOpened ? "text-gray-400" : "text-teal-400"
                  }`}
                />
              </div>
              <p className="font-bold px-5 text-xl -mt-5">{item.name}</p>
              <p className="text-gray-400 px-5 py-3">
                Open{item.opening_time}-{item.closing_time}
              </p>
              <div className="flex px-5 items-center mb-1 space-x-4">
                <div className="border p-2 rounded-lg flex items-center space-x-3">
                  <AiOutlineStock />
                  <span>Manage restaurant</span>
                </div>
                <div className="border p-2 rounded-lg">
                  <IoIosMail size={20} />
                </div>
                <div className="border p-2 rounded-lg">
                  <FaPhone size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed top-0 right-0 shadow-2xl grayscale overflow-hidden">
        <img src={map} alt="" />
      </div>
      <div className="absolute flex space-x-5 items-center right-52 bottom-10 bg-white p-4 rounded-xl">
        <input
          type="checkbox"
          className="h-10 w-10"
        />
        <GiAvocado className="text-teal-400" size={30}/>
        <span className="text-xl capitalize">show opened restaurants only</span>
      </div>
    </div>
  );
};

export default Restaurants;
