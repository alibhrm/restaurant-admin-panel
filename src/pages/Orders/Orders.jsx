import { useState } from "react";
import orders from "@/data/orders.json";
import headerOrders from "@/data/allHeaderOrders.json";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { RiRedPacketFill } from "react-icons/ri";

const Orders = () => {
  const [sort, setSort] = useState({
    keyToSort: "RESTAURANT",
    direction: "asc",
  });
  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.KEY,
      direction:
        header.KEY === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }

  function getSortedArray(arrayToSort) {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }
    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  }

  return (
    <>
      <div className="flex justify-between bg-white p-10 rounded-2xl m-6 shadow">
        <div className="flex space-x-3">
          <div className="p-4 rounded-xl bg-lime-50">
            <RiRedPacketFill size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">244</span>
            <span className="">Orders in total</span>
          </div>
        </div>
        <div className="flex space-x-3 pr-16 border-r-2">
          <div className="p-4 rounded-xl bg-slate-200">
            <RiRedPacketFill size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">244</span>
            <span className="">Orders in total</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="p-4 rounded-xl bg-green-50 text-green-400">
            <AiOutlineStock size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">$1240</span>
            <span className="">Sales today</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="p-4 rounded-xl bg-red-50 text-red-400">
            <AiOutlineStock size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">$45,200</span>
            <span className="">Sales this month</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="p-4 rounded-xl bg-green-50 text-green-400">
            <AiOutlineStock size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">$229,710</span>
            <span className="">Sales this year</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white px-10 rounded-2xl mx-6 shadow">
        <div className="font-light py-10 text-2xl">Orders</div>
        <table className="items-center w-full bg-transparent border-collapse">
          <thead className="table-header-group ">
            <tr>
              {headerOrders.map((header, index) => (
                <th
                  key={index}
                  className="px-2 align-middle py-3 text-xs capitalize whitespace-nowrap border-b-2 text-gray-500 font-bold text-left cursor-pointer"
                  onClick={() => handleHeaderClick(header)}
                >
                  <span className="flex items-center space-x-1">
                    {header.LABEL}

                    <MdKeyboardArrowDown
                      size={20}
                      direction={
                        sort.keyToSort === header.KEY ? sort.direction : "asc"
                      }
                    />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getSortedArray(orders).map((order, index) => (
              <tr key={index}>
                {headerOrders.map((header, index) => (
                  <td
                    title={order[header.KEY]}
                    key={index}
                    className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 truncate"
                  >
                    {order[header.KEY]}
                  </td>
                ))}
                <td>
                  <FaPhone
                    className={`${
                      !order.isDelivered ? "text-gray-400" : "black"
                    }`}
                  />
                </td>
                <td>
                  <PiDotsThreeOutlineFill />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
