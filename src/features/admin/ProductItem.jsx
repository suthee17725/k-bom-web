import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditIcon, TrashIcon } from "../../icons";
import ProductForm from "./ProductForm";
import album from "../../img/blackping.jpg";
import { deleteProductAsync, getProductAsync } from "../../slice/adminSlice";

export default function ProductItem(el) {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const handleClickDeleteBox = async () => {
    await dispatch(deleteProductAsync(el?.el?.productId)).unwrap();
    await dispatch(getProductAsync()).unwrap();
  };
  console.log("******", el);
  return (
    <>
      {!isEditMode ? (
        <>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {el?.el?.id}
            </th>
            <td className="px-6 py-4">{el?.el?.name}</td>
            <td className="px-6 py-4">฿ {el?.el?.price}</td>
            <td className="px-6 py-4"> {el?.el?.quantity}</td>
            <td className="px-6 py-4">
              <img src={album} alt="album" className="w-[100px]" />
            </td>
            <td className="px-6 py-4 flex gap-3">
              <div
                className="bg-blue-700 p-[5px] rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditMode(true);
                }}
              >
                <EditIcon />
              </div>
              <div
                className="bg-red-700 p-[5px] rounded-md cursor-pointer"
                onClick={handleClickDeleteBox}
              >
                <TrashIcon />
              </div>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <td>
              <div className="mt-6 ml-6 bg-gray-300 w-[50px] flex justify-center">
                {el?.el?.productId}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <ProductForm
                textConFirm={`Edit`}
                onIsAddMode={setIsEditMode}
                oldProduct={el}
                key={el?.id}
              />
              <hr />
            </td>
          </tr>
        </>
      )}
    </>
  );
}
