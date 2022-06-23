import "antd/dist/antd.css";
import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";

const Petritt = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Petritt</title>
      </Head>
      <div>공통 메뉴</div>
      <Component></Component>
    </>
  );
};

Petritt.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Petritt;
