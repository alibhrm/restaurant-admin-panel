import MinimizeOrders from "./Components/MinimizeOrders/MinimizeOrders";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaMotorcycleSolid } from "react-icons/lia";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiRedPacketFill } from "react-icons/ri";
import { PiHamburgerBold } from "react-icons/pi";
import avocado from "@/assets/images/avocado.png";
import avatar from "@/assets/images/user.png";
import Chart from "./Components/Chart/Chart";

const Dashboard = () => {
  return (
    <div className="flex px-10 w-full gap-x-8">
      <div className="flex md:flex-col gap-6">
        <div className="flex flex-col bg-white rounded-2xl shadow">
          <div className="font-light py-5 px-10 text-2xl">Sales</div>
          <Chart />
          <div className="flex justify-between border-t-2 px-10 pt-5 pb-6">
            <div className="flex space-x-3">
              <div className="p-4 rounded-xl bg-lime-50">
                <RiRedPacketFill size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl">121</span>
                <span className="">Ongoing</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="p-4 rounded-xl bg-slate-200">
                <RiRedPacketFill size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl">244</span>
                <span className="">Delivered</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="p-4 rounded-xl bg-neutral-100">
                <PiHamburgerBold size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl">244</span>
                <span className="">Orders in total</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white px-10 rounded-2xl shadow">
          <div className="font-light py-5 text-2xl">Orders</div>
          <MinimizeOrders />
        </div>
      </div>

      <div className="flex md:flex-col gap-y-6">
        <div className="flex  bg-zinc-700 text-white rounded-2xl shadow">
          <div className="flex flex-col p-10">
            <div className="font-light py-4 px-2 text-2xl">Current Offer</div>
            <div className="font-light py-4 px-2 text-xl">
              When the costumer buys more than 5 avoburgers, there's
              <span className="font-bold px-1">20% discount</span>
              added.
            </div>
            <div className="py-4 px-2">
              <button
                type="button"
                className="bg-gradient-to-r from-teal-500 to-lime-300 p-5 rounded-xl flex items-center justify-center space-x-2 w-52"
              >
                <IoSettingsOutline />
                <span>Manage offers</span>
              </button>
            </div>
          </div>
          <img src={avocado} alt="" width={200} />
        </div>

        <div className="flex flex-col bg-white rounded-2xl shadow">
          <div className="font-light px-10 py-6 text-2xl">Drivers</div>
          <div className="flex flex-col text-xl px-10 pt-1 pb-5">
            <div className="flex items-center justify-between">
              <img
                src={avatar}
                className="h-10 w-10 rounded-full ring-2 ring-white"
              />
              <span>Adam Oller</span>
              <LiaMotorcycleSolid size={39} />
            </div>
            <div className="flex py-8 items-center justify-between">
              <img
                src={avatar}
                className="h-10 w-10 rounded-full ring-2 ring-white"
              />
              <span>Adam Oller</span>
              <LiaMotorcycleSolid size={39} />
            </div>
            <div className="flex items-center justify-between">
              <img
                src={avatar}
                className="h-10 w-10 rounded-full ring-2 ring-white"
              />
              <span>Adam Oller</span>
              <LiaMotorcycleSolid size={39} />
            </div>
          </div>
        </div>
        <div className="flex bg-zinc-700 text-white px-10 py-8 rounded-2xl shadow">
          <div className="font-medium py-4 px-2 text-2xl flex items-center space-x-2">
            <span>Show map</span>
            <HiArrowLongRight size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
