import { Menu } from "antd";
import React from "react";

export const MenuBar = ({ currentKey, onChangeKey }) => (
  <Menu
    onClick={onChangeKey}
    selectedKeys={currentKey}
    mode="horizontal"
    theme="dark"
    style={{ color: "white" }}
  >
    <Menu.Item key="business">ビジネス</Menu.Item>
    <Menu.Item key="entertainment">エンターテインメント</Menu.Item>
    <Menu.Item key="health">ヘルス</Menu.Item>
    <Menu.Item key="science">サイエンス</Menu.Item>
    <Menu.Item key="sports">スポーツ</Menu.Item>
    <Menu.Item key="technology">テクノロジー</Menu.Item>
  </Menu>
);
