import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { logout } from "../slice/authSlice";

import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { link } from "joi";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  // console.log("----->", isAuthenticated);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* login and cart */}
        <div className="flex items-center gap-5">
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative mr-4"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          {/* login */}
          {isAuthenticated ? (
            <>
              {user?.role === "ADMIN" ? (
                <>
                  <Link to={"/admin"}>
                    <button className="py-2 px-4 bg-[#002D74] text-white rounded-lg hover:scale-105 duration-300">
                      เข้าหน้า admin
                    </button>
                  </Link>
                  <button
                    className="py-2 px-4 bg-[#002D74] text-white rounded-lg hover:scale-105 duration-300"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    ออกจากระบบ
                  </button>
                </>
              ) : (
                <button
                  className="py-2 px-4 bg-[#002D74] text-white rounded-lg hover:scale-105 duration-300"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  ออกจากระบบ
                </button>
              )}
            </>
          ) : (
            <Link to={"/login"}>
              <button className="py-2 px-4 bg-[#002D74] text-white rounded-lg hover:scale-105 duration-300">
                เข้าสู่ระบบ
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
