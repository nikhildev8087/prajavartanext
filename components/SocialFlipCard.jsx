import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import LocalNewsCard from "./LocalNewsCard";
// import { Link } from "react-router-dom";
import { IMAGES } from "../assets/images";
import Link from "next/link";
import Image from "next/image";

const SocialFlipCard = ({ relatednews, relatednewsData }) => {
  const [flipped, setFlipped] = useState(false);
  // console.log("related news => ", relatednewsData)

  useEffect(() => {
    const flipTimeout = setTimeout(
      () => {
        setFlipped(!flipped);
      },
      flipped ? 5000 : 10000
    ); // Flip after 5 seconds on front side and 10 seconds on back side

    return () => clearTimeout(flipTimeout);
  }, [flipped]);

  return (
    <div className=" grid grid-rows-2 h-full overflow-hidden">
      <div className="mx-auto w-full relative row-span-1">
        <div
          className={`flip-card mx-auto  pt-3 ${
            flipped ? "lg:flipped md:flipped " : ""
          }`}
        >
          <div className="flip-card-inner flex flex-col h-full">
            <div className="flip-card-front">
              <div className="pb-2 h-full border bg-[#F8F9FA]  duration-150 delay-150">
                <div className="socialbuttons">
                  <div className="mb-3 border-b text-left">
                    <h5 className="py-2 px-3 mb-0 bg-[#F8F9FA] font-bold text-lg">
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        className="text-yellow-500 mr-4"
                      />
                      आम्हाला फॉलो करा
                    </h5>
                  </div>

                  <div className="icon-container ">
                    <div className="mb-2 w-48 text-center mx-auto rounded ">
                      <button className="px-4  mx-auto flex items-center gap-2">
                        <div className="max-w-full h-fit">
                          <iframe
                            style={{ height: "40px" }}
                            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fprajavarta&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId"
                            frameBorder="0"
                          ></iframe>
                        </div>
                        {/* <h2>Follow</h2> */}
                        {/* <Link
                          target="_blank"
                          to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.facebook.com%252Fprajavarta%26display%3Dpopup%26ref%3Dplugin%26src%3Dlike%26kid_directed_site%3D0&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB&kid_directed_site=0"
                        >
                          Share
                        </Link> */}
                      </button>
                    </div>

                    <div className="mb-2 w-48 text-center mx-auto rounded border bg-[#00ACED]">
                      <Link
                        href="https://twitter.com/prajavarta?ref_src=twsrc%5Etfw"
                        target="_blank"
                        className="py-2 px-4  mx-auto flex items-center gap-2  text-white"
                      >
                        <svg
                          className="fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                        <h2>Follow</h2>
                        <p>@prajawarta</p>
                      </Link>
                    </div>
                    <div className="mb-2 w-48 text-center mx-auto rounded border bg-[#BB0000]">
                      <Link
                        href="https://www.youtube.com/channel/UCqcKhJQdPm8wvhdakW4B-mA"
                        target="_blank"
                        className="py-2 px-4 rounded mx-auto flex items-center gap-2 bg-[#BB0000] text-white"
                      >
                        <svg
                          className="fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                        >
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                        <p>Youtube</p>
                      </Link>
                    </div>

                    <div className="mb-2 w-48 text-center mx-auto rounded border bg-[#BC2A8D] ">
                      <Link
                        href="https://www.instagram.com/prajavarta/"
                        target="_blank"
                        className="py-2 px-4 rounded mx-auto flex items-center gap-2 bg-[#BC2A8D] text-white"
                      >
                        <svg
                          className="fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                        <p>Instagram</p>
                      </Link>
                    </div>

                    <div className="mb-2 w-48 text-center mx-auto rounded border bg-[#FFD91D] ">
                      <Link
                        href="https://sharechat.com/trending"
                        target="_blank"
                        className="py-2 px-4 rounded mx-auto flex items-center gap-2 bg-[#FFD91D] text-white"
                      >
                        <h2>Follow</h2>
                        <p>Sharechat</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flip-card-back lg:block md:block sm:hidden hidden h-full">
              <div className="my-3 relative   transition-all  duration-500">
                <Image
                  alt="sliderImage"
                  className="object-cover h-full w-96"
                  src={IMAGES?.sliderImg}
                />
                <div className="absolute bottom-[20px] left-[20px] right-[20px] text-white text-center">
                  <h4 className="mb-2 mt-0 ">प्रजावार्ता</h4>
                  <p>
                    <small>
                      महाराष्ट्राचे पहिले हायपर लोकल न्यूज अँड इंफोटेन्मेन्ट ऍप,
                      बातम्यांसोबत बरेच काही
                    </small>
                  </p>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.prajavarta"
                    target="_blank"
                    className="px-4 py-1 border rounded text-sm mt-2"
                  >
                    Install Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatednews ? (
        <div className="lg:retative md:relative md:block lg:block hidden sm:hidden w-full mt-28 row-span-1  bottom-8">
          <div className="pb-2  border bg-[#F8F9FA]  duration-150 delay-150">
            <div className="socialbuttons">
              <div className="mb-3 border-b mx-4">
                <h5 className="py-2 px-3 mb-0 bg-[#F8F9FA] font-bold text-lg">
                  <FontAwesomeIcon
                    icon={faThumbtack}
                    className="text-yellow-500 mr-4"
                  />
                  संबंधित बातम्या
                </h5>
              </div>

              <div className="icon-container mx-4">
                {relatednewsData?.map((ele) => (
                  <LocalNewsCard
                    key={ele?.id}
                    img={ele?.news_featured_thumb}
                    title={ele?.news_heading}
                    link={`/${ele?.news_url}?id=${ele?.id}`}
                    // link={`/news/${ele?.news_url}`}
                  />
                ))}
                {/* <LocalNewsCard
                  img="https://prajavarta.com/Admin/images/44df3a40-6ef2-435d-a2c6-6c023f3a791b-1690964176.jpeg"
                  title="Mulshi Dam : महत्वाची बातमी! मुळशी धरण ८४ टक्के भरले;
                सांडव्यावरून १ हजार क्युसेकने विसर्ग सुरु"
                  link="/news/details"
                />
                <LocalNewsCard
                  img="https://prajavarta.com/Admin/images/44df3a40-6ef2-435d-a2c6-6c023f3a791b-1690964176.jpeg"
                  title="Mulshi Dam : महत्वाची बातमी! मुळशी धरण ८४ टक्के भरले;
                सांडव्यावरून १ हजार क्युसेकने विसर्ग सुरु"
                  link="/news/details"
                /> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SocialFlipCard;
