import React, { useState } from "react";
import styled from "styled-components";
import FirstSliderComponent from "../components/FirstSliderComponent";
import MenuComponent from "../components/MenuComponent";
import SecondSliderComponent from "../components/SecondSliderComponent";
import { ThemeData } from "../components/ThemeComponent";
import ThirdSliderComponent from "../components/ThirdSliderComponent";

export default function HomePage() {
  const [hover, setHover] = useState<boolean>(false);
  const [hover3, setHover3] = useState<boolean>(false);
  const [isConcerts, setIsConcerts] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseEnter3 = () => {
    setHover3(true);
  };
  const handleMouseLeave3 = () => {
    setHover3(false);
  };

  return (
    <Div>
      <MenuComponent
      isConcerts={isConcerts}
      setIsConcerts={setIsConcerts}
        hover={hover}
        setHover={setHover}
        hover3={hover3}
        setHover3={setHover3}
        handleMouseEnter={handleMouseEnter}
        handleMouseEnter3={handleMouseEnter3}
        handleMouseLeave={handleMouseLeave}
        handleMouseLeave3={handleMouseLeave3}
      />
      <DivContent>
      <FirstSliderComponent />
      <SecondSliderComponent/>
      <ThirdSliderComponent/>
      </DivContent>
     
    </Div>
  );
}

const DivContent = styled.div`
    width: calc(100% - 256px);
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    overflow: hidden;

`

const Div = styled.div`
  padding-left: 24px;
  z-index: -10;
  display: flex;
  flex-direction: row;
  
`;
