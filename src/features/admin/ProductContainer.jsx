import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../../components/HeaderAdmin";
import ProductForm from "./ProductForm";
import { getProductAsync } from "../../slice/adminSlice";
import ProductItem from "./ProductItem";

export default function ProductContainer() {
  const [isAddMode, setIsAddMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const productArr = useSelector((state) => state?.productPlan?.allproduct);

  //   console.log(productArr);

  return (
    <>
      <HeaderAdmin topic="รายการสินค้า" />
      {isAddMode ? (
        <div className="m-8 mt-0">
          <ProductForm onIsAddMode={setIsAddMode} />
        </div>
      ) : (
        <button
          type="button"
          className="mx-8 p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-sm w-fit"
          onClick={() => setIsAddMode(true)}
        >
          เพิ่ม
        </button>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
        <table className="w-full text-left text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-5">
                ลำดับที่
              </th>
              <th scope="col" className="px-6 py-5">
                ชื่อสินค้า
              </th>
              <th scope="col" className="px-6 py-5">
                ราคา
              </th>
              <th scope="col" className="px-6 py-5">
                จำนวนสินค้า
              </th>
              <th scope="col" className="px-6 py-5">
                รูปสินค้า
              </th>
              <th scope="col" className="px-6 py-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productArr.map((el) => (
              <ProductItem key={el?.el?.id} el={el} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
