import React from "react";
import { Link } from "react-router-dom";

export default function ListAdminMenuButton({ children, icon, link, onClick }) {
  return (
    <li>
      <Link
        to={link}
        className="flex items-center p-2 rounded-full hover:bg-c-white1 hover:text-c-gray3 transition-all  active:scale-95 duration-200"
        onClick={onClick}
      >
        <div className="text-[18pt]">{icon}</div>
        <span className="ml-3">{children}</span>
      </Link>
    </li>
  );
}
