import { IMAGES } from "@/assets/images";
import { getNewsData } from "@/graph/news";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AppHeader = ({ headerActive }) => {
  const customeSlider = useRef();
  const [sticky, setSticky] = useState("");
  const [headerCategory, setHeaderCategory] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const activevalue = localStorage.getItem("activeTab");
  //   const valueAdd = JSON.parse(activevalue);
  const [activeTab, setActiveTab] = useState(4);

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      customeSlider.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (currentSlide < headerCategory?.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    customeSlider.current.slickNext();
  };

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: false,
    // arrow: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    headerCategoryHandler();
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 104
        ? "w-full fixed z-[9999] top-0 left-0 lg:px-4 md:px-4 sm:px-0 px-0 "
        : "";
    setSticky(stickyClass);
  };

  const headerCategoryHandler = async () => {
    const data = {
      method_name: "get_category",
    };
    try {
      await getNewsData(data).then((res) => {
        setHeaderCategory(res?.data?.ALL_IN_ONE_NEWS);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const classes = `w-full bg-white ${sticky}`;

  //   const getCategoryNewsHandler = async (data) => {
  //     navigate("/news", { state: "data" });

  //     window.scrollTo({ top: 0 });
  //   };

  return (
    <header className="relative">
      <div className="flex">
        <div className="py-6 px-2">
          <Link href="/news">
            <div className="lg:h-16 md:h-10 h-10">
              <Image
                alt="prajavarta_logo"
                className="h-full w-full"
                src={IMAGES?.logosm}
              />
            </div>
          </Link>
        </div>
      </div>

      <div className={classes}>
        <ul className="relative  items-center">
          <div className="relative overflow-hidden">
            <div className="">
              <button
                onClick={() => goToPrevious()}
                disabled={currentSlide === 0}
                // onClick={() => gotoPrev()}
                className={` ${
                  currentSlide === 0 ? "hidden" : ""
                } absolute left-0 top-0 lg:h-[52px] lg:w-[50px] h-[37px] w-[37px] md:h-[40px] md:w-[40px]  z-20 bg-[#000099] text-white   text-center align-middle `}
              >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </button>
            </div>

            <Slider className="" {...sliderSettings} ref={customeSlider}>
              <Link
                href="/news"
                onClick={() => (
                  setActiveTabHandler("fresh", "ताज्या बातम्या"),
                  getCategoryNewsHandler("ele")
                )}
              >
                <li
                  className={`${
                    activeTab === "fresh" ? "bg-[#ff7d13] text-white" : ""
                  }  hover:bg-[#ff7d13] hover:text-white font-semibold items-center m-0  text-sm md:text-base lg:text-lg lg:p-3  md:p-2 p-2 w-full border-[1px] border-dotted hover:border-solid text-center`}
                >
                  ताज्या बातम्या
                </li>
              </Link>

              {headerCategory?.map((ele, idx) => {
                return (
                  <Link
                    key={idx}
                    href="/news"
                    // onClick={() => (
                    //   setActiveTabHandler(ele?.cid, ele?.category_name),
                    //   getCategoryNewsHandler(ele)
                    // )}
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    <li
                      key={ele?.cid}
                      className={`${
                        activeTab === ele?.cid && headerActive
                          ? "border-solid bg-[#ff7d13] text-white truncate"
                          : ""
                      }  hover:bg-[#ff7d13] hover:text-white font-semibold items-center m-0 text-sm md:text-base lg:text-lg lg:p-3  md:p-2 p-2 w-full border-[1px] border-dotted hover:border-solid text-center`}
                    >
                      {ele?.category_name}
                    </li>
                  </Link>
                );
              })}
            </Slider>
            <button
              // onClick={() => gotoNext()}
              onClick={() => goToNext()}
              disabled={currentSlide === headerCategory?.length - 1}
              className=" absolute right-0 top-0 lg:h-[52px] lg:w-[50px] h-[37px] w-[37px] md:h-[40px] md:w-[40px]   z-20 bg-[#000099] text-white text-center align-middle  "
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </ul>
        <div className="bg-[#fff3cd] lg:hidden md:hidden sm:block block">
          <div className="flex gap-2 pr-4 py-1  lg:pl-12 sm:pl-2 pl-3 items-center justify-between">
            <div className="lg:w-12 lg:h-12 h-8 w-8 relative">
              <Image
                alt="favicon"
                className="h-full w-full object-cover"
                src={IMAGES?.favicon}
              />
            </div>
            <p className="lg:text-base text-sm lg:font-bold  font-medium sm:font-light text-[#856404]">
              आपल्या शहरातील ताज्या बातम्या मिळवा मोफत
            </p>
            <button className="lg:text-base text-xs sm:text-xs lg:font-medium sm:font-thin font-normal bg-[#000099] lg:px-4 lg:py-2 p-2 rounded-full text-white">
              Install App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
