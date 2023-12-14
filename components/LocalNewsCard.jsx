import Link from "next/link";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

const LocalNewsCard = ({ img, title, link, categoryNews }) => {
  return (
    <Link href={link} className="">
      <div className="card  border-b hover:bg-[#F5F5F5] py-2">
        <div className="lg:flex-row md:flex-row flex flex-col  grid-cols-12 gap-4">
          <div className="col-span-3 ">
            <div
              className={`${
                categoryNews
                  ? "lg:w-14 md:w-14 w-full"
                  : "lg:w-20 md:w-20 w-full"
              } lg:h-16 md:h-24 sm:h-24 h-48 rounded-md`}
            >
              <img
                className={`h-full w-full object-cover rounded-md`}
                src={img}
              />
            </div>
          </div>
          <div className="col-span-9 pr-2 ">
            <div className="overflow-hidden">
              <h1 className=" font-semibold text-lg ">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocalNewsCard;
