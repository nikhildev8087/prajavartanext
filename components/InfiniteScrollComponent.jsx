import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNewsData } from "../graph/news";
import LocalNewsCard from "./LocalNewsCard";

const InfiniteScrollComponent = ({ activeCategory, resetPage }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // const activeTab = localStorage.getItem("activeTab");
  // const activeData =  JSON.parse(activeTab);
  const activeData = "";

  const oldcategoryId = activeCategory;

  useEffect(() => {}, [data]);
  useEffect(() => {
    // Fetch data based on the active category and page number
    const fetchData = async () => {
      if (activeData?.id === activeData?.prevId) {
      } else {
      }
      try {
        let value;
        if (activeCategory === "fresh") {
          value = {
            method_name: "get_category_latest",
            page: page,
            user_id: "",
          };
        } else {
          value = {
            page: page,
            cat_id: activeCategory,
            method_name: "get_news",
            user_id: "",
          };
        }
        const response = await getNewsData(value).then((res) => {
          return res?.data?.ALL_IN_ONE_NEWS;
        });

        const newData = response;

        if (newData.length === 0) {
          setHasMore(false); // No more data available
        } else {
          setData(newData); // Replace the data when the category changes
          setPage(1); // Reset the page to 1 when category changes
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeCategory]);

  useEffect(() => {
    // Fetch more data when the page changes
    if (page > 1 && page <= 5) {
      const fetchMoreData = async () => {
        try {
          let value;
          if (activeCategory === "fresh") {
            value = {
              method_name: "get_category_latest",
              page: page,
              user_id: "",
            };
          } else {
            value = {
              page: page,
              cat_id: activeCategory,
              method_name: "get_news",
              user_id: "",
            };
          }
          const response = await getNewsData(value).then((res) => {
            return res?.data?.ALL_IN_ONE_NEWS;
          });
          const newData = response;

          if (newData.length === 0) {
            setHasMore(false); // No more data available
          } else {
            setData((prevData) => [...prevData, ...newData]);
          }
        } catch (error) {
          console.error("Error fetching more data:", error);
        }
      };

      fetchMoreData();
    }
  }, [activeCategory, page]);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() =>
        setPage((prevPage) => (page >= 1 && page < 5 ? prevPage + 1 : 1))
      } // Load more data
      hasMore={hasMore}
      loader={
        data.length >= 1 && data?.length <= 5 ? <h4>Loading...</h4> : null
      }
    >
      {data
        // .filter(function (v, i, self) {
        //   return i === self.indexOf(v);
        // })
        .map((ele) => (
          <LocalNewsCard
            categoryNews={true}
            key={ele?.id}
            img={ele?.news_featured_thumb}
            title={ele?.news_heading}
            link={`/${ele?.news_url}?id=${ele?.id}`}
          />
        ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
