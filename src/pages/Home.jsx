import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCollaction } from "../hooks/useCollaction";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
function Home() {
  const { data } = useCollaction("recepies");
  console.log(data);
  const { user } = useGlobalContext();

  return (
    <div className="w-full max-w-[850px] flex  flex-col gap-7 ">
      <h1
        style={{ wordSpacing: "5px" }}
        className="text-center text-2xl font-medium"
      >
        Salom, {user.displayName}{" "}
        <span className="text-red-600 font-extrabold">COOKING TIME</span> veb
        sahifasiga xush kelibsiz (❁´◡`❁)
      </h1>
      <p className="text-center">
        Bu platforma oshxonadagi ijodkorlik va ta’bni bir joyga jamlaydi. Har
        bir retsept – bu faqatgina taom emas, balki bir hikoya, bir hissiyot va
        albatta – bir lazzat sarguzashti.
      </p>
      <div className="">
        <h4>🍽️ Cooking Time imkoniyatlari:</h4>
        <ul className="list-disc pl-10">
          <li>O‘z retseptlaringizni qo‘shishingiz,</li>
          <li>Boshqalar bilan tajriba almashishingiz,</li>
          <li>
            Va har kuni yangi, mazali retseptlar kashf qilishingiz mumkin.
          </li>
        </ul>
      </div>

      <div className="flex gap-6 justify-center items-center flex-col">
        <h4 className="font-medium text-[16px]">
          Sahifamiz shunchaki ovqat tayyorlash uchun emas – bu joy yurakdan
          pishirish uchun!
        </h4>
        <h4 className="font-bold text-xl text-center">
          🍲 Hayotingizni lazzat bilan to‘ldiring. Birinchi qadamni bugun
          tashlang!
        </h4>
      </div>
    </div>
  );
}

export default Home;
