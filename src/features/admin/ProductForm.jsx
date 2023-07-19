import { useState } from "react";
import { useDispatch } from "react-redux";

import InputForm from "../../components/InputForm";
import InputErrorMessage from "../../components/InputErrorMessage";

import {
  createProductAsync,
  getProductAsync,
  updateProductAsync,
} from "../../slice/adminSlice";

export default function ProductForm({ onIsAddMode, oldProduct }) {
  const initialInput = {
    name: oldProduct?.el?.name || "",
    description: oldProduct?.el?.description || "",
    price: oldProduct?.el?.price || "",
    quantity: oldProduct?.el?.quantity || "",
    image: oldProduct?.el?.image || "222",
  };
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  console.log("oldProduct", oldProduct);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // const result = validatePricingPlan(input);
    // if (result) {
    //   return setError(result);
    // }
    // setError({});
    if (!oldProduct) {
      await dispatch(createProductAsync(input)).unwrap();
      await dispatch(getProductAsync());
      onIsAddMode(false);
    } else if (oldProduct) {
      await dispatch(
        updateProductAsync({ productId: oldProduct?.el?.productId, ...input })
      );
      await dispatch(getProductAsync());
      onIsAddMode(false);
    }
  };
  return (
    <form className="bg-white rounded-md px-6 pt-4" onSubmit={handleSubmitForm}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="Product"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            รายการสินค้า
          </label>
          <div>
            <div>
              <InputForm
                labelName="ชื่อ"
                name="name"
                placeholder=""
                value={input.name}
                onChange={handleChangeInput}
                isInvalid={error.name}
              />
              {error.name && <InputErrorMessage message={error.name} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="รายละเอียด"
                name="description"
                placeholder=""
                value={input.description}
                onChange={handleChangeInput}
                isInvalid={error.description}
              />
              {error.description && (
                <InputErrorMessage message={error.description} />
              )}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="ราคา"
                name="price"
                placeholder=""
                value={input.price}
                onChange={handleChangeInput}
                isInvalid={error.price}
              />
              {error.price && <InputErrorMessage message={error.price} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="จำนวนสินค้า"
                name="quantity"
                placeholder=""
                value={input.quantity}
                onChange={handleChangeInput}
                isInvalid={error.quantity}
              />
              {error.quantity && <InputErrorMessage message={error.quantity} />}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  คลิ๊กเพื่อเพิ่มรูปภาพสินค้า
                </span>{" "}
                หรือลากและวาง
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="p-2 min-w-[80px] text-white bg-blue-600 rounded-md w-fit"
        >
          Save
        </button>
        <button
          type="submit"
          className="p-2 min-w-[80px] text-white bg-red-700 rounded-md w-fit"
          onClick={() => onIsAddMode(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
