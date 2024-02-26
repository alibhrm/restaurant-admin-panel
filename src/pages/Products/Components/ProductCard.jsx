import { IoMdEye, IoMdSettings } from "react-icons/io";
import { IoIosLeaf } from "react-icons/io";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col justify-start shadow-md rounded-2xl p-12 bg-white relative"
        >
          <div className="flex justify-center">
            <img src={product.image} alt="Product" />
          </div>
          {product.checkbox && (
            <div className="absolute top-10 text-teal-500 right-10">
              <IoIosLeaf size={20} />
            </div>
          )}
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="capitalize font-bold">{product.name}</h1>
            <span className="font-thin">{product.weight}</span>
            <p className="text-xs font-thin text-center max-w-40 mt-8">
              {product.tags.join(",")}
            </p>
          </div>
          <div className="flex items-center justify-center m-8">
            <span>{product.calory}</span>
          </div>
          <div className="flex items-center justify-between px-6 gap-5">
            <div className="flex justify-center items-center">
              <span>${product.price}</span>
            </div>

            <div className="flex items-center border rounded p-1 cursor-pointer">
              <IoMdEye size={20} />
            </div>
            <div className="flex items-center border rounded p-1 cursor-pointer">
              <IoMdSettings size={20} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
