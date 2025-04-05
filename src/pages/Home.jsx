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
            <div key={d.id}>
              <h1>{d.title}</h1>
              <p>{d.Description}</p>
              <h2>{}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
