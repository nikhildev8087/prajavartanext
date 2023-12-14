import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNewsData } from "../graph/news";
import { IMAGES } from "../assets/images";
import Link from "next/link";
import Image from "next/image";

const ImgNewsSlider = () => {
  const [treingNewsData, setTrendingNewsData] = useState([]);
  const [ismobile, setIsmobile] = useState(
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  );
  const customeSlider = useRef();

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

  const trendingNewsHandler = async () => {
    const values = {
      method_name: "get_home",
      user_id: "",
    };
    try {
      await getNewsData(values).then((res) => {
        setTrendingNewsData(res?.data?.ALL_IN_ONE_NEWS?.trending_news);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    trendingNewsHandler();
  }, []);

  return (
    <section className="mt-3 overflow-hidden w-full relative mb-2">
      <div className="relative">
        <div className="absolute top-0 z-50 right-2 m-1 lg:block md:block hidden">
          <button
            onClick={() => gotoNext()}
            className=" bg-[#000099] text-white hover:opacity-100 opacity-50  h-10 w-10 rounded text-center align-middle relative "
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={() => gotoPrev()}
            className=" bg-[#000099] text-white hover:opacity-100 opacity-50  h-10 w-10 rounded text-center align-middle relative ml-2"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>

        <div className="w-full">
          <Slider {...sliderSettings} ref={customeSlider}>
            {treingNewsData?.map((ele, idx) => (
              <div
                key={idx}
                className="relative mx-auto overflow-hidden px-2 w-full lg:h-96 md:h-80 rounded-lg h-52 z-20 "
              >
                <Link
                  href={`${
                    ismobile ? "whatsapp://" : "https://web.whatsapp.com/"
                  }send?text=*प्रजावार्ता : ${
                    ele?.news_heading
                  } -* http://prajavarta.com/${ele?.news_url}?id=${
                    ele?.id
                  } %0a  %0a *अ‍ॅप डाउनलोड करण्यासाठी :- *https://bit.ly/3mEyE1V`}
                  target="_blank"
                  className="mt-2 absolute bottom-6 right-6 cursor-pointer z-50 w-fit"
                >
                  <span className="text-green-500 mr-2">
                    <span className="h-6 w-6 relative float-right rounded-lg">
                      <Image
                        alt="whatsapp_icon"
                        className="h-full w-full float-right rounded-lg"
                        src={IMAGES?.whatsapp1}
                      />
                    </span>
                  </span>
                </Link>
                <img
                  src={ele?.news_featured_image}
                  alt="Background"
                  className="w-full h-full object-cover"
                />

                <div className="absolute mx-2 bottom-0 left-0 right-0 opacity-80 bg-gradient-to-t from-black via-black to-transparent h-1/2"></div>

                <Link
                  href={`/${ele?.news_url}?id=${ele?.id}`}
                  className="absolute w-full bottom-0 left-0 right-0 pl-6 pr-12 pb-6"
                >
                  <p className="text-gray-300 text-base font-medium">
                    {ele?.news_heading}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImgNewsSlider;
