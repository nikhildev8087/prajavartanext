"use client";
import { IMAGES } from "@/assets/images";
import AppHeader from "@/components/AppHeader";
import CategoryNews from "@/components/CategoryNews";
import ImgNewsSlider from "@/components/ImgNewsSlider";
import Layout from "@/components/Layout";
import LocalNews from "@/components/LocalNews";
import SocialFlipCard from "@/components/SocialFlipCard";
import TrendingNews from "@/components/TrendingNews";
import { getNewsData } from "@/graph/news";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const index = ({ data, resData }) => {
  const [listingPage, setListingPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [categoryNews, setCategoryNews] = useState([]);
  // let cat_data;
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   let categoryId = localStorage.getItem("activeTab");
  //   cat_data = JSON.parse(categoryId) || {
  //     id: "fresh",
  //     catName: "ताज्या बातम्या",
  //   };
  // }

  console.log("data", data);
  console.log("resData", resData);
  return (
    <>
      <Head>
        <meta property="og:title" content="Home page title" />
        <meta property="og:description" content="home page description" />
        <meta property="og:image" content="home page thumb" />
        <meta property="og:url" content="prajavarta.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="lg:px-4 md:px-4 sm:px-0 px-0">
          <AppHeader headerActive={true} />
          <div className="mt-3 md:px-4 lg:px-4 sm:px-0 px-0">
            <TrendingNews />
            <div className=" mb-3">
              <div className="grid  grid-cols-12 gap-2">
                <LocalNews />
                <div className="lg:col-span-5 md:col-span-5 sm:col-span-12 col-span-12 ">
                  <ImgNewsSlider />

                  <CategoryNews />
                </div>

                {/* <LocalNewsMobile /> */}

                <div className="col-span-12 mx-auto sm:block lg:hidden md:hidden ">
                  <div className="relative flex items-center text-center mx-4 h-full w-72 ">
                    <Image
                      alt="slide imag"
                      className="h-full object-cover w-full"
                      src={IMAGES?.sliderImg}
                    />
                    <div className="absolute bottom-[20px] left-[20px] right-[20px] text-white text-center">
                      <h4 className="mb-2 mt-0 ">प्रजावार्ता</h4>
                      <p>
                        <small>
                          महाराष्ट्राचे पहिले हायपर लोकल न्यूज अँड इंफोटेन्मेन्ट
                          ऍप, बातम्यांसोबत बरेच काही
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

                <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12  lg:block md:block lg:sticky lg:top-[52px] md:sticky md:top-[52px] relative h-full">
                  <div className="h-full">
                    <SocialFlipCard />
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

export async function getServerSideProps() {
  const value = {
    salt: "699",
    sign: "3df6d220fa247a377807a130090b831d",
    package_name: "com.prajavarta",
    method_name: "get_single_news",
    news_id: "12038",
    user_id: "",
  };

  const encodedData = btoa(JSON.stringify(value));

  const formdata = new FormData();
  formdata.append("data", encodedData);

  const WEB_URL = "https://prajavarta.com/Admin/api_v1.php";

  try {
    const response = await axios.post(`${WEB_URL}`, formdata);
    const data = response?.data?.ALL_IN_ONE_NEWS[0];

    const values = {
      method_name: "get_category",
    };
    const resData = await getNewsData(values).then((res) => {
      return res?.data?.ALL_IN_ONE_NEWS;
    });

    return {
      props: {
        data,
        resData,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: null,
        resData: null,
      },
    };
  }
}

export default index;
