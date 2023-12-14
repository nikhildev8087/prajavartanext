"use client";
import React, { useState } from "react";
import InfiniteScrollComponent from "./InfiniteScrollComponent";

const CategoryNews = () => {
  const [cat_data, setCat_data] = useState({
    id: "fresh",
    catName: "ताज्या बातम्या",
  });

  if (typeof window !== "undefined") {
    // Perform localStorage action
    let categoryId = localStorage.getItem("activeTab");
    // setCat_data(
    //   JSON.parse(categoryId) || {
    //     id: "fresh",
    //     catName: "ताज्या बातम्या",
    //   }
    // );
  }
  return (
    <div className="mb-3 lg:mx-4 md:mx-4 sm:mx-2 mx-2">
      <div className="flex items-center mb-3">
        <span>
          <h5 className="text-lg font-bold">
            <span className=" mr-4 h-4 p-[3px] w-1 bg-[#ff7d13]" />
            {/* {resData
                          ?.filter((ele) => {
                            return ele?.category_name === cat_data?.catName;
                          })
                          .map((ele) => {
                            return <p>{ele?.category_name}</p>;
                          })} */}
            {cat_data?.catName}
          </h5>
        </span>
      </div>
      <div className="news">
        <InfiniteScrollComponent
          activeCategory={cat_data?.id}
          previousId={cat_data?.id}
          resetPage={""}
        />
      </div>
    </div>
  );
};

export default CategoryNews;
