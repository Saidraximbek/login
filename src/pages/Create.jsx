import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import InputArea from "../components/InputArea";
import { useFirebase } from "../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { addDocument } = useFirebase("recepies");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientValue, setIngredientValue] = useState("");
  const navigate = useNavigate("/")
  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement);
    let ingredient = formData.get("ingredients");
    console.log(ingredient);

    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const image = formData.get("image");
    const title = formData.get("title");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");
   
    await addDocument({
      image,
      title,
      cookingTime: `${cookingTime} minutes`,
      ingredients,
      description,
    });
    navigate('/createdRecepies')
  };
  return (
    <div className="w-full max-w-[850px] flex flex-col items-center gap-[50px]">
      <h1 className="font-bold text-2xl">Yangi Retsept qo'shish</h1>
      <div className="w-[100%] max-w-[500px] flex flex-col gap-6 ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[100%] max-w-[500px] flex flex-col gap-6"
        >
          <FormInput name="image" label="Taom rasmining linkini kiriting" type="text" />
          <FormInput name="title" label="Taomning nomini yozing" type="text" />
          <FormInput
            name="cookingTime"
            label="Tayyorlanish vaqti (daqiqalarda)"
            type="number"
          />
          <div className=" flex w-full justify-between gap-7 items-center">
            <FormInput
              name="ingredients"
              label="Masalliqlar(har bir massaliqdan keyin qo'shish tugmasini boshing)"
              type="text"
            />
            <button
              onClick={addIngredient}
              type="button"
              className="btn btn-primary"
            >
              Qo'shish
            </button>
           
          </div>
          <InputArea name="description" />
          <button className="btn btn-primary" type="submit">
            Tayyor
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
