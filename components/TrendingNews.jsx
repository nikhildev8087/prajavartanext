import React, { useEffect, useRef, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getNewsData } from "../graph/news";
import Slider from "react-slick";
import Link from "next/link";

const TrendingNews = () => {
  const customeSlider = useRef();
  const [topStoryNews, setTopStoryNews] = useState([]);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  });
  // const sliderSettings = ;

  const getTopNewsHandler = async () => {
    const values = {
      method_name: "get_home",
      user_id: "",
    };
    try {
      await getNewsData(values).then((res) => {
        setTopStoryNews(res?.data?.ALL_IN_ONE_NEWS?.top_story);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopNewsHandler();
  }, []);

  return (
    <div className="px-2 grid-cols-12 gap-2 items-center  md:grid lg:grid">
      <div className="lg:col-span-2 md:col-span-3 col-span-12 gap-2">
        <p className="text-white bg-[#000099] px-6 py-2 font-bold text-lg text-center">
          ट्रेंडिंग बातम्या
        </p>
      </div>

      <div className="lg:col-span-10 md:col-span-9 col-span-12">
        <div className="">
          <div className="flex items-center h-auto gap-2 my-2">
            <div className="overflow-hidden w-full ">
              <Slider {...sliderSettings} ref={customeSlider}>
                {topStoryNews &&
                  topStoryNews?.map((ele) => {
                    return (
                      <div className="w-32" key={ele?.id}>
                        <Link
                          href={`/${ele?.news_url}?id=${ele?.id}`}
                          // onClick={() => navigateToDetailPage(ele?.news_url, ele?.id)}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center py-2 lg:mt-1 md:mt-1 mt-2 sm:mt-2 sm:mb-2 text-[#000099] gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbtack} />
                            <p className="font-bold">{ele?.news_heading}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </Slider>
            </div>

            <div className="lg:flex md:flex items-center gap-2 sm:hidden hidden">
              <button
                className="bg-[#000099] text-white hover:opacity-100 opacity-50  h-10 w-10 rounded text-center align-middle relative"
                onClick={() => gotoNext()}
              >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </button>
              <button
                className="bg-[#000099] text-white hover:opacity-100 opacity-50  h-10 w-10 rounded text-center align-middle relative "
                onClick={() => gotoPrev()}
              >
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
