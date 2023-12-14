import React, { useEffect, useState } from "react";
import LocalNewsCard from "./LocalNewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getNewsData } from "../graph/news";

const LocalNews = () => {
  const [localNews, setLocalNews] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [locationId, setLocationId] = useState("18");
  if (typeof window !== "undefined") {
    const [selectedTaluka, setSelectedTaluka] = useState(
      localStorage.getItem("selectedTaluka")
    );
    const [locationId, setLocationId] = useState(
      localStorage.getItem("selectedTaluka") || "18"
    );
  }

  const handleIncrement = () => {
    if (pageCount < 10) {
      setPageCount(pageCount + 1);
    }
  };

  const handleDecrement = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }
  };

  const localNewsHandler = async () => {
    const value = {
      // salt: "894",
      // sign: "fcdf8bb361867fb9e74985c65cebe537",
      method_name: "news_by_location",
      // package_name: "com.prajavarta",
      loc_id: locationId,
      page: pageCount,
    };

    try {
      await getNewsData(value).then((res) => {
        setLocalNews(res?.data?.ALL_IN_ONE_NEWS);
      });
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   localNewsHandler();
  // }, [pageCount, localStorage.getItem("selectedTaluka")]);

  useEffect(() => {
    localNewsHandler();
  }, [pageCount]);

  useEffect(() => {
    const handleLocalStorageChange = () => {
      if (typeof window !== "undefined") {
        const updatedValue = localStorage.getItem("selectedTaluka") || "";

        setLocationId(updatedValue);
      }
    };

    // Listen for the custom event
    window.addEventListener("localStorageChanged", handleLocalStorageChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener(
        "localStorageChanged",
        handleLocalStorageChange
      );
    };
  }, []);

  return (
    <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 md:sticky md:top-[52px] lg:sticky lg:top-[52px] sm:bottom-0 sm:relative lg:h-screen md:h-screen sm:h-full lg:block md:block hidden px-2">
      <div className="mt-3">
        <div className="flex items-center mb-3">
          <span>
            <h5 className="text-xl font-bold">
              <span className=" mr-4 h-4 p-[3px] w-1 bg-[#ff7d13]" />
              स्थानिक बातम्या
            </h5>
          </span>
          <span className="ml-auto">
            <button
              onClick={() => handleDecrement()}
              className="p-2  text-lg font-bold px-3 py-2 bg-[#F8F9FA] hover:bg-[#E2E6EA]"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            </button>
            <button
              onClick={() => handleIncrement()}
              className="ml-1 text-lg font-bold px-3 py-2 bg-[#F8F9FA] hover:bg-[#E2E6EA]"
            >
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
            </button>
          </span>
        </div>

        <div className="lg:overflow-y-scroll md:overflow-y-scroll sm:overflow-hidden lg:h-screen md:h-screen sm:h-full">
          {localNews?.map((ele) => (
            <LocalNewsCard
              key={ele?.id}
              img={ele?.news_featured_thumb}
              title={ele?.news_heading}
              link={`/${ele?.news_url}?id=${ele?.id}`}
              // link={`/news/${ele?.news_url}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalNews;
