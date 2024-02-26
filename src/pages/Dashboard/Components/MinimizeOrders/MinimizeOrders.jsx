import { useState } from "react";
import orders from "@/data/orders.json";
import headerOrders from "@/data/headerOrders.json";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";


const MinimizeOrders = () => {
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
    const newArray = arrayToSort.slice(0,4)
    if (sort.direction === "asc") {
      return newArray.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }
    return newArray.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  }

  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <thead className="table-header-group ">
        <tr>
          {headerOrders.map((header, index) => (
            <th
              key={index}
              className="px-2 align-middle py-3 text-xs capitalize whitespace-nowrap border-b-2 text-gray-500 font-bold text-left"
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
                className={`${!order.isDelivered ? "text-gray-400" : "black"}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MinimizeOrders;
