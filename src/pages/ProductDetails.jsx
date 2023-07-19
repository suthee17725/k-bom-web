import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProductIdAsync } from "../slice/adminSlice";
import blackpink from "../img/blackping.jpg";

const ProductDetails = () => {
  //get product id from url

  const { id } = useParams();
  const [pageLoading, setPageLoading] = useState(true);
  const dispatch = useDispatch();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getProductIdAsync(id)).unwrap();
      setPageLoading(false);
    };
    fetch();
  }, [id]);

  const product = useSelector((state) => state?.productPlan?.isProduct);
  console.log(product);

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center">Loading...</section>
    );
  }

  return (
    <>
      <Header />
      <Sidebar />
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className=" container mx-auto">
          {/* image & text wrapper */}
          <div className="flex flex-col lg:flex-row  items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={blackpink}
                alt=""
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {product?.name}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                THB {product?.price}
              </div>
              <p className="mb-8">{product?.description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white hover:bg-green-300 hover:text-primary transition-all duration-300 rounded-full"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
