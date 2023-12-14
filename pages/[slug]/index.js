// pages/[slug]/index.js
import AppHeader from "@/components/AppHeader";
import DetailNewsCard from "@/components/DetailNewsCard";
import Layout from "@/components/Layout";
import RelatedNews from "@/components/RelatedNews";
import axios from "axios";
import Head from "next/head";
import React from "react";

// export const metadata = {
//   title: "test title",
//   description: "News page description",
// };
const index = ({ data }) => {
  console.log("data", data);
  const relatedNews = data?.relative_news || [];
  return (
    <>
      <Layout>
        <div className="lg:px-4 md:px-4 sm:px-0 px-0 ">
          <AppHeader headerActive={true} />

          <section className="mt-3 relative w-full md:px-4 lg:px-4 sm:px-0 px-0">
            <div className="lg:mx-28 md:mx-12 sm:mx-1 mx-1">
              <div className="grid grid-cols-12 gap-2">
                <div className="lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12">
                  {data?.map((ele, idx) => (
                    <div key={idx}>
                      <DetailNewsCard data={ele} />

                      <div className=" block ">
                        {relatedNews?.map((item, idx) => (
                          <RelatedNews key={idx} data={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12  ">
                  <div className="sticky lg:top-[52px] ">
                    {/* <SocialFlipCard
                    relatednewsData={relatedNews}
                    relatednews={true}
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params, query } = context;
  console.log("prams from news page", query?.id, query?.slug);
  const value = {
    salt: "699",
    sign: "3df6d220fa247a377807a130090b831d",
    package_name: "com.prajavarta",
    method_name: "get_single_news",
    news_id: query?.id || "12038",
    user_id: "",
  };

  const encodedData = btoa(JSON.stringify(value));

  const formdata = new FormData();
  formdata.append("data", encodedData);

  const WEB_URL = "https://prajavarta.com/Admin/api_v1.php";

  try {
    const response = await axios.post(`${WEB_URL}`, formdata);
    const data = response?.data?.ALL_IN_ONE_NEWS;

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default index;
