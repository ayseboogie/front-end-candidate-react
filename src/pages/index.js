import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContent from "../components/mainContent";
import RelativeLinks from "../components/relativeLinks";
import Header from "../components/header";
import "./index.css";
import GatsbyConfig from "../../gatsby-config"
import internationalData from "../components/internationalData";
import internationalLinks from "../components/internationalLinks";
import {Helmet} from "react-helmet";

// const international = internationalData.map(item => <internationalLinks key={item.language} item={item}/>)

const IndexPage = () => (
  <Layout>
    <div style={{width: "100%"}}><Header /></div>
    <div className="container">
      {/* <SEO title={GatsbyConfig.siteMetadata.title} /> */}
     <Helmet><title>Newsroom, Trade, & Advertising</title></Helmet>
     <h1 className="page-title" style={{textAlign: "center"}}>Newsroom, Trade, & Advertising</h1>
      <div className="column-wrapper">
        <div className="left-column">
          <MainContent />
        </div>
        <div className="right-column">
          <RelativeLinks />
          <br />
          <img src="https://s3resizer.mediaradar.com/s3resizer/Image/GetContent?adImageHash=1X+ximHnDCxnvuj6S26oeUoRmT0=" alt="Mastercard Ad" />
         
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
