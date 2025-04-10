import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAddBusiness, MdOutlineBookmarkAdded } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
const Sitebar = () => {
  const { user } = useGlobalContext();
  return (
    <div className="max-md:hidden h-[430px] max-md:absolute w-[100%] flex flex-col gap-6 max-w-[250px] rounded-2xl p-[12.5px] bg-gray-100">
      <div className="flex items-center gap-2 pb-3 border-b-gray-500 border-b-1">
        <img
          src={user.photoURL}
          alt="user avatar"
          width={60}
          className="rounded-full"
        />
        <h2 className="font-medium">{user.displayName}</h2>
      </div>

      <div className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          <div className="sitebar-hover flex items-center gap-2">
            <IoHomeOutline /> Bosh Sahifa
          </div>
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          <div className="sitebar-hover flex items-center gap-2">
            <MdOutlineAddBusiness /> Retsept qo'shish
          </div>
        </NavLink>
        <NavLink
          to="/createdRecepies"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          <div className="sitebar-hover flex items-center gap-2">
            <MdOutlineBookmarkAdded /> Qo'shilgan retseptlar
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sitebar;
