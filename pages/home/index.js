import React, { useRef, useState } from "react";
import {
  faAngleLeft,
  faAngleRight,
  faAsterisk,
  faCheckCircle,
  faDownload,
  faGraduationCap,
  faHandPointUp,
  faHeart,
  faShareAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slider from "react-slick";
import AppHeader from "@/components/AppHeader";
import Image from "next/image";
import Link from "next/link";
import { MOBILE_SCREEN } from "@/assets/images";
import Layout from "@/components/Layout";

const Main = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  return (
    <>
      <Layout>
        <div className="lg:px-4 md:px-4 sm:px-0 px-0">
          <AppHeader headerActive={false} />
        </div>
        <div className="fixed-bg fixed left-0 right-0 bottom-0 bg-[#e4e8ea] z-[-1] ">
          <Image
            alt="coverbg"
            className="h-full w-full"
            src={MOBILE_SCREEN?.coverbg2}
          />
        </div>
        <div className="relative ">
          <div
            className="min-h-full-[90vh] overflow-hidden bg-[url('https://prajavarta.com/assets/img/bg/bg-9.png')]"
            style={{
              backgroundImage: `url("https://prajavarta.com/assets/img/bg/bg-9.png")`,
            }}
          >
            {/* <img src='https://prajavarta.com/assets/img/bg/bg-9.png' /> */}
            <div className="mx-8 py-20">
              <div className="grid grid-cols-2 mx-8">
                <div className="lg:col-span-1 md:col-span-1 col-span-2">
                  <div className="relative">
                    <div className="relative lg:h-[600px] md:h-[450px] sm:h-[300px] h-[250px]">
                      <Image
                        alt="mobilescreen"
                        className=" p-4 object-cover  mx-auto "
                        // src="https://prajavarta.com/assets/img/mobile-screens/login.png"
                        src={MOBILE_SCREEN?.login}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-1 col-span-2">
                  <div className="text-white">
                    <h1 className="lg:text-6xl md:text-3xl sm:text-3xl font-extrabold mb-6">
                      <span className="lg:text-5xl md:text-3xl sm:text-3xl mb-2">
                        PrajaVarta
                      </span>
                      <br />
                      INFOTAINMENT APPLICATION
                    </h1>
                    <p className="lg:text-2xl md:text-2xl sm:text-lg font-medium mb-8">
                      Get the latest update of News, Entertainment, Day Special,
                      Motivation, Sports, Education, Horoscope and much more at
                      one place.
                    </p>
                    <Link
                      href="/"
                      className="rounded-full text-blue-600 bg-white px-4 py-3  text-lg font-medium"
                    >
                      <FontAwesomeIcon className="mr-2" icon={faDownload} />
                      Download App
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-[7px] w-full"></div>

          <div className="section-2 py-28 px-20">
            <div className="relative w-full">
              <div className="grid grid-cols-12 items-center justify-center">
                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                  <div>
                    <h1 className="text-5xl font-extrabold mb-5">
                      About The{" "}
                      <span className="text-[#000099]">Prajavarta</span>
                    </h1>
                    <p className="mb-12 text-lg font-medium">
                      Prajavarta is all in one infotainment platform where you
                      can get regular updates of National, International &
                      Technology news, Entertainment, Day Special, Motivation,
                      Sports, Education, Horoscope & much more completely free.
                    </p>
                    <div>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faHeart}
                        />
                        Trusted by all users
                      </p>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faCheckCircle}
                        />
                        Verified News
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 md:col-span-12 col-span-12">
                  <div className="relative animate-scaleimage">
                    <Image
                      alt="desc"
                      // src="https://prajavarta.com/assets/img/mobile-screens/desc-1.png"
                      src={MOBILE_SCREEN?.desc1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4">
            <div className="p-10 bg-white rounded-lg">
              <div>
                <h1 className="mb-12 lg:text-4xl md:text-3xl text-xl font-extrabold">
                  PrajaVarta <span className="text-[#000099]">Screenshots</span>
                </h1>
              </div>

              <div className="mx-4 relative">
                <button
                  onClick={() => gotoNext()}
                  className="absolute top-[50%] left-0 bg-white h-10 w-10 flex items-center justify-center rounded-full z-20"
                >
                  <FontAwesomeIcon
                    className="text-[#1F88E4]"
                    icon={faAngleLeft}
                  />
                </button>
                <Slider {...sliderSettings} ref={customeSlider}>
                  <div className="mx-2 px-2 h-full">
                    <Image alt="" className="mx-2" src={MOBILE_SCREEN?.m1} />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      src={MOBILE_SCREEN?.m2}
                      // src="https://prajavarta.com/assets/img/mobile-screens/2.png"
                    />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      // src="https://prajavarta.com/assets/img/mobile-screens/3.png"
                      src={MOBILE_SCREEN?.m3}
                    />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      src={MOBILE_SCREEN?.m4}
                      // src="https://prajavarta.com/assets/img/mobile-screens/4.png"
                    />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      src={MOBILE_SCREEN?.m5}
                      // src="https://prajavarta.com/assets/img/mobile-screens/5.png"
                    />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      src={MOBILE_SCREEN?.m6}
                      // src="https://prajavarta.com/assets/img/mobile-screens/6.png"
                    />
                  </div>
                  <div className="mx-2 px-2 h-full">
                    <Image
                      alt=""
                      className="mx-2"
                      src={MOBILE_SCREEN?.m7}
                      // src="https://prajavarta.com/assets/img/mobile-screens/7.png"
                    />
                  </div>
                </Slider>

                <button
                  onClick={() => gotoPrev()}
                  className="absolute top-[50%] right-0 bg-white h-10 w-10 flex items-center justify-center rounded-full z-20"
                >
                  <FontAwesomeIcon
                    className="text-[#1F88E4]"
                    icon={faAngleRight}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="section-2 py-28 px-20">
            <div className="relative w-full">
              <div className="grid grid-cols-12 items-center justify-center">
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="relative ">
                    <Image
                      className="animate-scaleimage"
                      // src="https://prajavarta.com/assets/img/mobile-screens/desc-2.png"
                      src={MOBILE_SCREEN?.desc2}
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div>
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-extrabold mb-10">
                      To receive the daily updates from local to global news,{" "}
                      <span className="text-[#000099]">
                        To receive the daily updates from local to global news,{" "}
                      </span>
                    </h1>
                    <div>
                      <Link
                        href="/home"
                        className="px-6 py-3 rounded-full bg-[#000099] text-white text-lg"
                      >
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faHandPointUp}
                        />
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-[7px] w-full"></div>

          <div className="section-2 py-28 px-20">
            <div className="relative w-full">
              <div className="grid grid-cols-12 items-center justify-center">
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div>
                    <h1 className="lg:text-5xl md:text-4xl text-xl font-extrabold mb-5">
                      Other Amazing <br />{" "}
                      <span className="text-[#000099]">Feature</span>
                    </h1>
                    <div>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faUserAstronaut}
                        />
                        Motivational Quotes
                      </p>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faShareAlt}
                        />
                        Daily Special
                      </p>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faAsterisk}
                        />
                        Daily Heroscope
                      </p>
                      <p className="mb-3 text-lg">
                        <FontAwesomeIcon
                          className="mr-2 text-[#000099]"
                          icon={faGraduationCap}
                        />
                        Education
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="relative animate-scaleimage">
                    <Image
                      alt="desc3"
                      // src="https://prajavarta.com/assets/img/mobile-screens/desc-3.png"
                      src={MOBILE_SCREEN?.desc3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
