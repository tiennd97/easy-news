import { Col, Divider, List, Pagination, Row } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DEAFAULT_PAGE_SIZE = 10;
const MAX_TOTAL_FOR_DEVELOPER = 100;

export const ListArticles = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    const fn = async () => {
      const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "jp",
          // just a demo api key, do not worry about security
          apiKey: "0fcacbf413a044c29be58fdf04eeaf14",
          pageSize: DEAFAULT_PAGE_SIZE,
          page: currentPage,
          category,
        },
      });
      setArticles([...data.articles]);
      setTotalResults(data.totalResults);
    };
    fn();
    window.scrollTo(0, 0);
  }, [currentPage, category]);

  if (articles.length == 0) return null;

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articles}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  width={272}
                  alt="logo"
                  src={item.urlToImage || "http://via.placeholder.com/272"}
                />
              </a>
            }
          >
            <List.Item.Meta
              title={
                <a
                  href={item.url}
                  style={{ color: "blue" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              }
              description={`${item.author || "anonymous"} - ${
                item.source.name
              } - ${new Date(item.publishedAt).toLocaleString("jp", {
                hour12: true,
              })}`}
            />
            {item.description}
          </List.Item>
        )}
      />
      {totalResults > DEAFAULT_PAGE_SIZE && (
        <Row style={{ textAlign: "center", marginBottom: 20 }}>
          <Col xs={24}>
            <Divider />
            <Pagination
              responsive
              current={currentPage}
              total={
                totalResults <= MAX_TOTAL_FOR_DEVELOPER
                  ? totalResults
                  : MAX_TOTAL_FOR_DEVELOPER
              }
              defaultPageSize={DEAFAULT_PAGE_SIZE}
              showQuickJumper
              showSizeChanger={false}
              onChange={(page) => setCurrentPage(page)}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
