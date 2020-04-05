import { Col, Row } from "antd";
import React, { Suspense, useState } from "react";
import { ListArticles } from "../components/ListArticles";
import { MenuBar } from "../components/MenuBar";

export const HomePage = () => {
  const [currentKey, setCurrentKey] = useState("business");

  return (
    <Row>
      <Col xs={24}>
        <MenuBar
          currentKey={[currentKey]}
          onChangeKey={(e) => setCurrentKey(e.key)}
        />
      </Col>
      <Col xs={24}>
        <Suspense fallback="Loading">
          <ListArticles category={currentKey} />
        </Suspense>
      </Col>
    </Row>
  );
};
