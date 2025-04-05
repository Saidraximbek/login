import React from "react";
import { useCollaction } from "../hooks/useCollaction";

const Users = () => {
  const { data } = useCollaction("users");
  return (
    <div className="w-full max-w-[300px] p-[25px] max-md:flex max-md:gap-[50px] max-md:overflow-scroll max-md:max-w-[750px] max-md:overflow-y-hidden">
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className="flex flex-col gap-20">
              {d.online ? (
                <div className="flex items-center gap-4 capitalize mt-4 mb-4">
                  <div className="avatar avatar-online bg-gray-500 rounded-full">
                    <div className="w-12 rounded-full">
                      <img src={d.photoURL} />{" "}
                    </div>
                  </div>
                  <p className="">{d.displayName}</p>
                </div>
              ) : (
                <div  className="flex items-center gap-4 capitalize mt-4 mb-4">
                  <div className="avatar avatar-offline  bg-gray-500 rounded-full">
                    <div className="w-12 rounded-full">
                      <img src={d.photoURL} />
                    </div>
                  </div>
                  <p>{d.displayName}</p>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Users;
