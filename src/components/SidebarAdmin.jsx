import { useDispatch } from "react-redux";
import Logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slice/authSlice";
import ListAdminMenuButton from "./ListAdminMenuButton";

export default function SidebarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 flex flex-col flex-1 h-screen p-10 px-10 bg-blue-500 duration-[400ms]">
      <div className="w-full flex justify-center mb-5">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-[100px]" />
        </Link>
      </div>
      <ListAdminMenuButton link="/admin">รายการสินค้า</ListAdminMenuButton>
      <ListAdminMenuButton link="/">รายการชำระเงิน</ListAdminMenuButton>
      <ListAdminMenuButton link="/" onClick={() => dispatch(logout())}>
        ออกจากระบบ
      </ListAdminMenuButton>
    </div>
  );
}
