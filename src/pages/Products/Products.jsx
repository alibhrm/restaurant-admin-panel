import { BsThreeDotsVertical } from "react-icons/bs";
import { PiHamburgerBold,PiBowlFoodBold } from "react-icons/pi";
import { LuCupSoda,LuIceCream2 } from "react-icons/lu";
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
      <div className="flex gap-x-16 bg-white px-10 py-4 rounded-2xl m-6 shadow">
        <div className="flex space-x-3 cursor-pointer hover:border-b-2 border-black">
          <div className="p-4 flex items-center gap-x-2">
            <PiHamburgerBold size={30} />
            <span className="font-semibold">Main courses</span>
          </div>
        </div>
        <div className="flex space-x-3 cursor-pointer hover:border-b-2 border-black">
          <div className="p-4 flex items-center gap-x-2">
            <PiBowlFoodBold size={30} />
            <span className="font-semibold">Side dishes</span>
          </div>
        </div>
        <div className="flex space-x-3 cursor-pointer hover:border-b-2 border-black">
          <div className="p-4 flex items-center gap-x-2">
            <LuCupSoda size={30} />
            <span className="font-semibold">Drinks</span>
          </div>
        </div>
        <div className="flex space-x-3 cursor-pointer hover:border-b-2 border-black">
          <div className="p-4 flex items-center gap-x-2">
            <LuIceCream2 size={30} />
            <span className="font-semibold">Other</span>
          </div>
        </div>
        <div className="flex space-x-3 cursor-pointer hover:border-b-2 border-black">
          <div className="p-4 flex items-center gap-x-2">
            <BsThreeDotsVertical size={30} />
           
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
        <div className="flex top-0 right-0 bg-white shadow-md h-full w-[500px] overflow-hidden z-50 absolute">
         <AddNewProducts handleSubmit={handleSubmit} closeModal={setOpenModal} setSelectedImage={setSelectedImage} />
        </div>
      )}
    </>
  );
};

export default Products;
