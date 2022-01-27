// import types from react
import { FunctionComponent, ReactElement, useState } from "react";
// import component level styles
import style from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import MainComponent from "@/components/MainComponent";

// main home page compoent
const Home: FunctionComponent = (): ReactElement => {
  return (
    <div className={style.home}>
      {/* global style */}
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Crete+Round&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
        }
        a {
          text-decoration: none;
        }
      `}</style>

      <Navbar />
      <MainComponent />
    </div>
  );
};
// exported home page component
export default Home;
