import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
const AddNewProducts = ({ handleSubmit, closeModal, setSelectedImage }) => {
  const [productName, setProductName] = useState("");
  const [isSuitableForVegans, setIsSuitableForVegans] = useState(false);
  const [productWeight, setProductWeight] = useState("");
  const [productCalories, setProductCalories] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [tags, setTags] = useState([]);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };
  const handleIsSuitableForVegans = (event) => {
    setIsSuitableForVegans(event.target.checked);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    setSelectedImage(file);
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      name: productName,
      checkbox: isSuitableForVegans,
      weight: productWeight,
      calory: productCalories,
      price: productPrice,
      image: productImage,
      tags: tags,
    });
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between p-10">
        <span>Add New Product</span>
        <button onClick={() => closeModal(false)}>X</button>
      </div>
      <form onSubmit={handleOnsubmit} className="flex flex-col p-10">
        <label htmlFor="name" className="py-3">
          Name of the Product
          <input
            type="text"
            id="name"
            name="name"
            className="border w-full h-16  focus:border-black"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label htmlFor="ingredients" className="py-3">
          Ingredients:
          <TagsInput
            value={tags}
            onChange={handleTagsChange}
            name="Ingredients"
            placeHolder="Enter Ingredients"
            id="ingredients"
          />
        </label>
        <div className="flex items-center py-3 gap-3">
          <input
            type="checkbox"
            name=""
            id="vegans"
            value={isSuitableForVegans}
            onChange={handleIsSuitableForVegans}
          />
          <label className="capitalize" htmlFor="vegans">
            suitable for vegans
          </label>
        </div>
        <div className="flex w-full gap-x-2">
          <label htmlFor="weight" className="py-3 flex flex-col">
            weight in Grams
            <input
              type="number"
              id="weight"
              name="weight"
              className="border w-48 h-16 focus:border-black"
              value={productWeight}
              onChange={(e) => setProductWeight(e.target.value)}
            />
          </label>
          <label htmlFor="calories" className="py-3 flex flex-col">
            calories:
            <input
              type="text"
              id="calories"
              name="calories"
              className="border w-48 h-16 focus:border-black"
              value={productCalories}
              onChange={(e) => setProductCalories(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="price" className="py-3">
          price:
          <input
            type="text"
            id="price"
            name="price"
            className="border w-full h-16 focus:border-black"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="small_size"
        >
          Small file input
        </label>
        <input
          className="block w-1/3 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border-b-2"
          id="small_size"
          type="file"
          onChange={handleFileChange}
        />
        <div className="border-t-2 flex items-center justify-center py-10">
          <button type="submit" className="text-white bg-gray-600 rounded px-20 py-2">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProducts;
