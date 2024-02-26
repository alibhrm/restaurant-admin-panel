import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { GiAvocado } from "react-icons/gi"
import { PiHamburgerBold } from "react-icons/pi";;
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/user.png";

const navLinks = [
  {
    title: "Dashboard",
    icon: RxDashboard,
    path: "/",
  },
  {
    title: "Orders",
    icon: RiShoppingBag2Fill,
    path: "/orders",
  },
  {
    title: "Products",
    icon: PiHamburgerBold,
    path: "/products",
  },
  {
    title: "Restaurants",
    icon: FaLocationDot,
    path: "/restaurants",
  },
  {
    title: "Drivers",
    icon: GoPersonFill,
    path: "/drivers",
  },
];

const variants = {
  expanded: { width: "15%" },
  nonExpanded: { width: "6%" },
};

const Navbar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`bg-white text-black py-12 flex flex-col w-1/5 h-screen relative shadow-md
            ${isExpanded ? "" : "px-3"}
            `}
    >
      <div className="flex-grow-0">
        <div className="logo flex px-9 space-x-3 text-xl items-center">
          <GiAvocado size="20" />
          <span
            className={`${
              isExpanded ? "block" : "hidden"
            }  text-ellipsis overflow-hidden`}
          >
            AvoBurger
          </span>
        </div>
      </div>

      <div
        className="w-5 h-5 bg-teal-500 text-white rounded-full absolute -right-[9.5px] top-15 flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <IoIosArrowForward size="14" />
      </div>
      <div className="flex-1">
        <div className="mt-16 flex flex-col">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`flex space-x-3 px-9 py-5  
            ${
              activeNavIndex === index
                ? "bg-teal-50 text-teal-500 font-semibold border-r-2 border-green-300"
                : ""
            }`}
              onClick={() => setActiveNavIndex(index)}
            >
              {item?.title === "Logout" ? (
                <item.icon size="24" />
              ) : (
                <item.icon size="24" />
              )}
              <span className={isExpanded ? "block" : "hidden"}>
                {item?.title}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex-grow-0">
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } flex flex-col items-center justify-center pb-5 border-b-2`}
        >
          <p>Done for Today?</p>
          <button
            type="button"
            className="flex items-center rounded bg-gradient-to-r from-teal-500 to-lime-300 text-white p-4 mt-3"
          >
            <PiPaperPlaneRightFill />
            Send Daily Report
          </button>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } flex mt-10 space-x-6 justify-between px-4 items-center`}
      >
        <img
          src={avatar}
          className="h-10 w-10 rounded-full ring-2 ring-white"
        />
        <p className="font-semibold">Annalise Wallis</p>
        <BsThreeDotsVertical size={24}/>
      </div>
    </motion.div>
  );
};

export default Navbar;
