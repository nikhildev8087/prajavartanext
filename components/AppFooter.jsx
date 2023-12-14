import { IMAGES } from "@/assets/images";
import { getNewsData } from "@/graph/news";
import {
  faAngleDoubleRight,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AppFooter = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const freshNewsHandler = async () => {
    const value = {
      method_name: "get_category_latest",
      page: 1,
      user_id: "",
    };
    try {
      await getNewsData(value).then((res) => {
        setCategoryNews(res?.data?.ALL_IN_ONE_NEWS);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    freshNewsHandler();
  }, []);

  return (
    <footer className="relative w-full mt-[6%]">
      <div className="footer-container  bg-[#000099] lg:px-20 md:px-12 px-4 relative w-full py-4">
        <div className="container w-full px-4 mx-auto">
          <div className="grid grid-cols-12 gap-2">
            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="w-full relative">
                <h5 className="mt-0 mb-3 text-white font-bold text-lg">
                  About Prajawarta
                </h5>
              </div>

              <div className="realtive w-full">
                <ul className="text-white text-base font-medium mb-3">
                  <li className="mb-2">
                    <Link href="/home" target="_blank">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                      <span className="ml-2">FeedBack</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/home" target="_blank">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                      <span className="ml-2">Contact Us</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link target="_blank" href="/cookiepolicy">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                      <span className="ml-2">Cookie Policy</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link target="_blank" href="/privacypolicy">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                      <span className="ml-2">Privacy Policy</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link target="_blank" href="/termsandconditions">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                      <span className="ml-2">Terms and Conditions</span>
                    </Link>
                  </li>
                </ul>
                <div className="w-full relative">
                  <div className="flex text-[#fff] items-center">
                    <h6 className="text-medium font-medium mr-2">
                      Follow Us :
                    </h6>
                    <div className="flex">
                      <Link
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprajavarta%2F"
                        target="_blank"
                        className="relative group"
                      >
                        <svg
                          className="mx-auto fill-white absolute z-20 top-[20%] left-[40%]"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                          color="#ffff"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                        <button className="h-8 w-8 rounded relative bg-[#3B5998] ml-1 transition-all group-hover:rotate-180 group-hover:rounded-t-3xl group-hover:rounded-r-3xl delay-100 duration-150"></button>
                      </Link>

                      <Link
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprajavarta%2F"
                        target="_blank"
                        className="relative group"
                      >
                        <svg
                          className="mx-auto fill-white absolute z-20 top-[20%] left-[35%]"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                        <button className="h-8 w-8 rounded relative bg-[#BC2A8D] ml-1 transition-all group-hover:rotate-180 group-hover:rounded-t-3xl group-hover:rounded-r-3xl delay-100 duration-150"></button>
                      </Link>

                      <Link
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprajavarta%2F"
                        target="_blank"
                        className="relative group"
                      >
                        <svg
                          className="mx-auto fill-white absolute z-20 top-[20%] left-[30%]"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                        <button className="h-8 w-8 rounded relative bg-[#00ACED] ml-1 transition-all group-hover:rotate-180 group-hover:rounded-t-3xl group-hover:rounded-r-3xl delay-100 duration-150"></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-8 col-span-12">
              <div className="w-full relative">
                <h5 className="mt-0 mb-3 text-white font-bold text-lg">
                  Latest News
                </h5>
              </div>

              <div className="footer-news w-full relative">
                <div className="w-full relative">
                  {categoryNews?.slice(0, 5).map((ele) => (
                    <Link
                      key={ele?.id}
                      href={`/${ele?.news_url}?id=${ele?.id}`}
                      as={`/${ele?.news_url}?id=${ele?.id}`}
                    >
                      <div className="py-2 relative w-full">
                        <div className="flex items-center ">
                          <div className="text-white">
                            <h5 className="mb-0 text-ellipsis overflow-hidden text-sm ">
                              <FontAwesomeIcon
                                icon={faNewspaper}
                                className="mr-2"
                              />
                              {ele?.news_heading}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}

                  <Link
                    href={`/BJP-is-determined-to-win-Maval-Lok-Sabha-and-Assembly?id=12038`}
                    as={`/BJP-is-determined-to-win-Maval-Lok-Sabha-and-Assembly?id=12038`}
                  >
                    LInk
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12 col-span-12">
              <div className="w-full relative mb-3 ">
                <Link href="/news" className="mt-0 ">
                  <Image
                    className="lg:h-16 md:h-10 h-10 w-auto"
                    alt="logo_lg"
                    src={IMAGES?.logoLg}
                  />
                </Link>
              </div>

              <div className="text-white relative w-full text-sm">
                <p className="mb-0">
                  Prajavarta is personalized infotainment (information +
                  entertainment) and hyper-local news app. Available in the
                  Marathi and English (beta) language, this app gives you a
                  complete overview of trending news from national and
                  international categories to the world of Bollywood on your
                  favourite topics. It also gives you up-to-date information on
                  lifestyle, entertainment, essential tips, recipes, horoscope,
                  business, technology, day special etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-2 py-2 relative w-full text-white text-center bg-[#030375] text-sm">
        <p className="mb-0 ">© PrajaVarta. 2020</p>
      </div>
    </footer>
  );
};

export default AppFooter;
