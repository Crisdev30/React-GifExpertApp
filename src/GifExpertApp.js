import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setcategories([...categories, "HunterXHunter"]);
  //   setcategories( cats => [...cats, 'HunterXHunter'])
  // };
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
