import React, { useEffect } from "react";
import PresentationNavBar from "./PresentationNavBar";
import { useState } from "react";

const ContainerNavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

  const toggleMenuFunction = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <PresentationNavBar
        toggle={toggle}
        toggleMenuFunction={toggleMenuFunction}
        screenWidth={screenWidth}
      />
    </>
  );
};

export default ContainerNavBar;
