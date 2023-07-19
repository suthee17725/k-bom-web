import Product from "../components/Product";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductAsync } from "../slice/adminSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const products = useSelector((state) => state?.productPlan?.allproduct);

  // console.log(products);

  // const filteredProducts = products.filter(
  //   (item) =>
  //     (item.category && item.category.name === "Furniture") ||
  //     item.category === "laptops"
  // );

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <Hero />
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lo:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {products.map((el) => {
                return <Product el={el} key={el?.el?.id} />;
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
