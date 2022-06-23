import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col, Breadcrumb } from "antd";

import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/species">
            <a>Species</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/map">
            <a>Map</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton></SearchInput>
        </Menu.Item>
      </Menu>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          left contents
        </Col>
        <Col xs={24} md={12}>
          <div>target menu</div>
          {children}
        </Col>
        <Col xs={24} md={6}>
          right contents
        </Col>
      </Row>
    </div>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
