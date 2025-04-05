import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCollaction } from "../hooks/useCollaction";

function Home() {
  const { data } = useCollaction("recepies");

  return (
    <div className="w-full max-w-[850px]">
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className="flex flex-col gap-6">
              <div className="img-grid">
                 <img
                src="https://eda.yandex.ru/images/3454897/7c7a468dd159752c0675344e4701b067-684x520.jpeg"
                alt="dimlama img"
                width={400}
                className="dimlama"
              />

              <img src="https://yukber.uz/image/cache/catalog/813b9e741a4908e21b29fad4f5853975-600x600.jpeg" width={170} alt="" />
              <img src="https://exportal.io/files/images/items/0/308v2f3927c6.jpg" width={170} alt="" />
              <img src="https://yukber.uz/image/cache/catalog/product/YK14/b40daad4a08a3015fd264db22eacd6be-600x600.jpg" width={170} alt="" />
              <img src="https://lh3.googleusercontent.com/proxy/b-7VV56A8PIsszCPNfduH2eKTwf1Qyb73qdV2N7uvsCBepEyUYwjky2fkE_wY7GN899XTgheyP0HAUky2cyEPpQ3DtUMHJU-bfY8bPz__pVUmMWxPJtaopp3SsvMG37D6qvzUE0dqg266Yo" width={170} alt="" />
              </div>
             
              <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded-2xl">
                <h1 className="text-4xl font-bold text-center">{d.title}</h1>
                <p className="">{d.Description}</p>
              </div>

              <h2>{}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
