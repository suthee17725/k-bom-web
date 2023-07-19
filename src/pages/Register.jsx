import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../img/loginCover.jpg";
import { Link, useNavigate } from "react-router-dom";
import { registerAsync } from "../slice/authSlice";
import validateRegistration from "../validators/validate-regis";
import InputErrorMessage from "../components/InputErrorMessage";
import InputBar from "../components/InputBar";

export default function Register() {
  const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [error, setError] = useState({});
  const [input, setInput] = useState(initialInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegistration(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerAsync(input)).unwrap();
      navigate("/");
    } catch (err) {
      console.log("Error in register", err);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* registration container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">Create a new account</p>

          <form onSubmit={hdlSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.firstName}
                placeholder="ชื่อ"
                name="firstName"
                onChange={hdlChangeInput}
                isInvalid={error.firstName}
              >
                ชื่อ
              </InputBar>
              <div className="h-0 pl-5">
                {error.firstName && (
                  <InputErrorMessage message={error.firstName} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.lastName}
                placeholder="นามสกุล"
                name="lastName"
                onChange={hdlChangeInput}
                isInvalid={error.lastName}
              >
                นามสกุล
              </InputBar>
              <div className="h-0 pl-5">
                {error.lastName && (
                  <InputErrorMessage message={error.lastName} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.email}
                name="email"
                onChange={hdlChangeInput}
                isInvalid={error.email}
              >
                อีเมล
              </InputBar>
              <div className="h-0 pl-5">
                {error.email && <InputErrorMessage message={error.email} />}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={hdlChangeInput}
                isInvalid={error.phoneNumber}
              >
                เบอร์โทรศัพท์
              </InputBar>
              <div className="h-0 pl-5">
                {error.phoneNumber && (
                  <InputErrorMessage message={error.phoneNumber} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.password}
                name="password"
                onChange={hdlChangeInput}
                isInvalid={error.password}
              >
                รหัสผ่าน
              </InputBar>
              <div className="h-0 pl-5">
                {error.password && (
                  <InputErrorMessage message={error.password} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InputBar
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={hdlChangeInput}
                isInvalid={error.confirmPassword}
              >
                ยืนยันรหัสผ่าน
              </InputBar>
              <div className="h-0 pl-5">
                {error.confirmPassword && (
                  <InputErrorMessage message={error.confirmPassword} />
                )}
              </div>
            </div>

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              สมัครสมาชิก
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>ยังไม่มีบัญชี?</p>
            <Link
              to="/login"
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2 gap-4">
          <img className="rounded-2xl" src={logo} alt="registration-image" />
        </div>
      </div>
    </section>
  );
}
