import { useState } from "react";
import logo from "../img/loginCover.jpg";
import { Link, useNavigate } from "react-router-dom";
import validateLogin from "../validators/validate-login";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slice/authSlice";

export default function Login() {
  const initialInput = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // console.log(input);
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});
      console.log(input);
      await dispatch(loginAsync(input)).unwrap();
      navigate("/");
    } catch (err) {
      console.log("Error in login", err);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">เข้าสู่ระบบ</h2>
          <p className="text-xs mt-4 text-[#002D74] pb-4">
            กรอกข้อมูลของคุณเพื่อกลับเข้าสู่ระบบ
          </p>

          <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
            <input
              className="p-2 rounded-xl border"
              value={input.email}
              name="email"
              onChange={hdlChangeInput}
              placeholder="Email "
            />
            <input
              className="p-2 rounded-xl border"
              value={input.password}
              onChange={hdlChangeInput}
              name="password"
              type="password"
              placeholder="รหัสผ่าน"
            />
            <button
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>ยังไม่มีบัญชี?</p>
            <Link
              to="/Register"
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 "
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={logo} alt="registration-image" />
        </div>
      </div>
    </section>
  );
}
