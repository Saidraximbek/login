import React from "react";
import { useCollaction } from "../hooks/useCollaction";

const Users = () => {
  const { data } = useCollaction("users");
  return (
    <div className="w-full max-w-[300px] p-[25px]">
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className="flex flex-col gap-10">
              {d.online ? (
                <div className="flex items-center gap-4 capitalize mt-4 mb-4">
                  <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                      <img src={d.photoURL} />{" "}
                    </div>
                  </div>
                  <p className="">{d.displayName}</p>
                </div>
              ) : (
                <div  className="flex items-center gap-4 capitalize mt-4 mb-4">
                  <div className="avatar avatar-offline">
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
