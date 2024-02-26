// import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { RiRedPacketFill } from "react-icons/ri";
import AddNewProducts from "./Components/AddNewProducts";
import { useState } from "react";
import ProductCard from "./Components/ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSubmit = (newProduct) => {
    if (
      newProduct &&
      newProduct.name != "" &&
      newProduct.checkbox != null &&
      newProduct.weight != "" &&
      newProduct.calory != "" &&
      newProduct.price != "" &&
      newProduct.image != null
    ) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

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
      <div className="flex flex-wrap px-5 gap-3">
        <ProductCard products={products} />
        <button
          className="rounded-xl flex justify-center items-center p-10 border border-black"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          add new product
        </button>
      </div>
      {openModal && (
        <div className="flex top-0 right-0 bg-white shadow-md h-full w-1/3 overflow-hidden z-50 absolute">
         <AddNewProducts handleSubmit={handleSubmit} closeModal={setOpenModal} setSelectedImage={setSelectedImage} />
        </div>
      )}
    </>
  );
};

export default Products;
