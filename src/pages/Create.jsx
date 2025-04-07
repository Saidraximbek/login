import React, { useEffect } from "react";
import FormInput from "../components/FormInput";
import InputArea from "../components/InputArea";

const Create = () => {
  return (
    <div className="w-full max-w-[850px] flex flex-col items-center gap-[50px]">
      <h1 className="font-bold text-2xl">Yangi Retsept qo'shish</h1>
      <div className="w-[100%] max-w-[500px] flex flex-col gap-6 ">
        <FormInput name="title" label="Taomning nomini yozing" type="text" />
        <FormInput
          name="cookingTime"
          label="Tayyorlanish vaqti (daqiqalarda)"
          type="number"
        />
        <FormInput name="ingredients" label="Masalliqlar" type="text" />
        <InputArea />

        <button className="btn btn-primary" type="submit">
          Tayyor
        </button>
      </div>
    </div>
  );
};

export default Create;
