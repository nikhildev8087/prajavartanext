import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

const DetailNewsCard = ({ data, relatedNews }) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  console.log("data in detail news card", data);

  const insertAds = (content) => {
    const adHTML1 = '<div id="AADIV30"></div>';
    const adHTML2 = '<div id="AADIV31"></div>';
    const adHTML3 = '<div id="AADIV32"></div>';

    // Split the content into paragraphs
    const paragraphs = content.split("</p>");

    if (paragraphs.length >= 3) {
      paragraphs.splice(1, 0, adHTML1);
      paragraphs.splice(1, 0, adHTML2);
      paragraphs.splice(paragraphs.length, 0, adHTML3);

      const modifiedContent = paragraphs.join("</p>");
      return modifiedContent;
    } else {
      return content;
    }
  };

  useEffect(() => {
    const scripts = [
      {
        src: "https://prajavarta.com/Admanager/ser.php?t=AADIV30&f=30",
        async: true,
      },
      {
        src: "https://prajavarta.com/Admanager/ser.php?t=AADIV31&f=31",
        async: true,
      },
      {
        src: "https://prajavarta.com/Admanager/ser.php?t=AADIV32&f=32",
        async: true,
      },
    ];

    try {
      scripts.forEach((scriptInfo) => {
        const script = document.createElement("script");
        script.src = scriptInfo.src;
        script.async = scriptInfo.async;

        document.body.appendChild(script);
      });
    } catch (err) {
      throw err;
    }
    return () => {
      // Clean up scripts when the component is unmounted

      try {
        scripts.forEach((scriptInfo) => {
          const scriptElements = document.querySelectorAll(
            `[src="${scriptInfo.src}"]`
          );
          scriptElements.forEach((scriptElement) => {
            if (scriptElement.parentNode) {
              scriptElement.parentNode.removeChild(scriptElement);
            }
          });
        });
      } catch (err) {
        throw err;
      }
    };
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content={data?.news_heading} />
        <meta property="og:description" content={data?.news_heading} />
        <meta property="og:image" content={data?.news_featured_image} />
        <meta property="og:url" content="prajavarta.com" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="mt-3 relative w-full bg-[#F8F9FA] mb-2 pb-0">
        <div className="mb-4 mx-auto h-auto w-full p-4 ">
          <h1 className="mb-2 text-2xl font-bold">{data?.news_heading}</h1>
          <p className="mb-0">
            <small>तारीख : {data?.news_date}</small>
            <small className="float-right">
              श्रेणी :
              <span className="bg-[#ff7d13] text-white px-4 ml-1 py-1">
                {data?.category_name}
              </span>
            </small>
          </p>
        </div>

        <div className="w-full relative news-img p-4 ">
          <div className="text-center mb-4 float-left w-full relative">
            <div className="absolute bottom-8 right-1 ">
              <Link
                // to={`http://prajavarta.com/Zika-outbreak-in-Pune-health-system-on-alert-mode?id=11972`}
                href={`${
                  isMobile ? "whatsapp://" : "https://web.whatsapp.com/"
                }send?text=*प्रजावार्ता : ${
                  data?.news_heading
                } -* https://prajavarta.com/${data?.news_url}?id=${
                  data?.id
                } %0a  %0a *अ‍ॅप डाउनलोड करण्यासाठी :- *https://bit.ly/3mEyE1V`}
                target="_blank"
              >
                {/* <img className="h-7 float-right " src={IMAGES?.whatsapp2} /> */}
              </Link>
            </div>
            <img
              className="h-full w-full object-cover  rounded"
              src={
                data?.news_featured_image
                  ? data?.news_featured_image
                  : data?.news_featured_image
              }
            />
          </div>
        </div>

        <div className="news-text lg:p-4 md:p-4 sm:p-1 p-1 text-justify max-w-full">
          <div className="items-justify">
            {relatedNews ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.news_description,
                }}
              />
            ) : (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: insertAds(data?.news_description),
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div className="">
          <p className="mb-0 ">
            <small> विषय :</small>
          </p>
        </div>

        <div className="mt-4 relative w-full">
          <div className="flex items-start justify-end w-fit ml-auto  p-4">
            {/* <Link to="/news/whatsapp">Whatsapp</Link> */}

            <Link
              className=""
              href={`${
                isMobile ? "whatsapp://" : "https://web.whatsapp.com/"
              }send?text=*प्रजावार्ता : ${
                data?.news_heading
              } -* https://prajavarta.com/${data?.news_url}?id=${
                data?.id
              } %0a  %0a *अ‍ॅप डाउनलोड करण्यासाठी :- *https://bit.ly/3mEyE1V`}
              target="_blank"
            >
              <img
                className="h-7 text-right"
                src="https://prajavarta.com/assets/img/whatsapp.png"
                // src={IMAGES?.whatsapp1}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailNewsCard;
