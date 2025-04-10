import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCollaction } from "../hooks/useCollaction";
const CreatedRecepies = () => {
  const { data } = useCollaction("recepies");
  data && data.map((i)=>{
    console.log(i.title);
    
  })
  return (
    <div className="w-full max-w-[850px] flex flex-col items-center">
      <div className="w-full max-w-[850px] flex gap-[100px] flex-wrap justify-center">
        {data && data.map((i)=>{
          return (
             <NavLink  to="/FoodDimlama"  className={({ isActive }) =>
          isActive ? "menu-link active" : "menu-link"
        }>
        <ul className="w-full max-w-[850px] flex flex-wrap items-center gap-[50px]">
          <li className="bg-gray-200 w-[100%] max-w-[350px] flex flex-col gap-4 rounded-2xl justify-center items-center p-5">
            <img
              src={i.image}
              alt={`${i.title} rasmi bo'lishi kerak`}
              width={200}
              height={170}
              className="rounded-[8px] h-[170px]"
            />
            <div className="text-[18px] font-medium">
              {i.title}
            </div>
          </li>
        </ul>
      </NavLink>
          )
        })}
       
      </div>
      
    </div>
  );
};

export default CreatedRecepies;
