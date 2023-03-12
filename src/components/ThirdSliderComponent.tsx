import React, { useRef } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { ThemeData } from "./ThemeComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ThirdSliderComponent() {

  const sliderRef = useRef<any>(null);

  const slideNext = () => {
    sliderRef.current.slickNext();
  };
  
  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };
  
  const settings = {
    slidesToShow: 4,
    
  }

  return (
    <Main>
      <HeaderDiv>
        <H1>Today</H1>
        <DivButtons>
          <P>All</P>
          <LeftButton onClick={slidePrev}>
            <img src="/assets/left.svg" alt="" />
          </LeftButton>
          <RightButton onClick={slideNext}>
            <img src="/assets/right.svg" alt="" />
          </RightButton>
        </DivButtons>
      </HeaderDiv>
      <PopularDiv>
        <Slider {...settings} ref={sliderRef}>
        <ContentDiv>
          <Content image={"/assets/image9.png"}>
            <Date>
              <DateP>
                {" "}
                09
                <br /> MAR
              </DateP>
            </Date>
            <Price>
              <PriceP1>From/</PriceP1>
              <PriceP2>$15.00</PriceP2>
            </Price>
          </Content>
          <Text>
            <TextH1>,,Delusion of Two”
</TextH1>
            <TextP1>Tbilisi, Monohall</TextP1>
            <TextP2>Saturday, 22:00</TextP2>
          </Text>
        </ContentDiv>
        <ContentDiv>
          <Content image={"/assets/image10.png"}>
            <Date>
              <DateP>
                {" "}
                09
                <br /> MAR
              </DateP>
            </Date>
            <Price>
              <PriceP1>From/</PriceP1>
              <PriceP2>$25.00</PriceP2>
            </Price>
          </Content>
          <Text>
            <TextH1>Hamlet/Machine

</TextH1>
            <TextP1>Batumi, Adjarabet Arena</TextP1>
            <TextP2>Saturday, 18:00</TextP2>
          </Text>
        </ContentDiv>
        <ContentDiv>
          <Content image={"/assets/image11.png"}>
            <Date>
              <DateP>
                {" "}
                09
                <br /> MAR
              </DateP>
            </Date>
            <Price>
              <PriceP1>From/</PriceP1>
              <PriceP2>$15.00</PriceP2>
            </Price>
          </Content>
          <Text>
            <TextH1>,,I will swim over the sea”

</TextH1>
            <TextP1>Roast Battle - Stand-Up Show


</TextP1>
            <TextP2>Thursday, 19:00</TextP2>
          </Text>
        </ContentDiv>
        <ContentDiv>
          <Content image={"/assets/image9.png"}>
            <Date>
              <DateP>
                {" "}
                09
                <br /> MAR
              </DateP>
            </Date>
            <Price>
              <PriceP1>From/</PriceP1>
              <PriceP2>$25.00</PriceP2>
            </Price>
          </Content>
          <Text>
            <TextH1>Night Show Band

</TextH1>
            <TextP1>Tbilisi, Monohall</TextP1>
            <TextP2>Thursday, 19:00</TextP2>
          </Text>
        </ContentDiv>
        <ContentDiv>
          <Content image={"/assets/image10.png"}>
            <Date>
              <DateP>
                {" "}
                09
                <br /> MAR
              </DateP>
            </Date>
            <Price>
              <PriceP1>From/</PriceP1>
              <PriceP2>$70.00</PriceP2>
            </Price>
          </Content>
          <Text>
            <TextH1>Char;lie’s Aunt</TextH1>
            <TextP1>Tbilisi, Monohall</TextP1>
            <TextP2>Saturday, 22:00</TextP2>
          </Text>
        </ContentDiv>
        </Slider>
      </PopularDiv>
    </Main>
  );
}

const TextH1 = styled.h1`
margin-top: 15px;
    font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #424242;

`
const TextP1 = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #424242;
margin-top: 6px;
`

const TextP2 = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color:${ThemeData.colors.blue};
margin-top: 3px;

`
const Text = styled.div``;
const PriceP1 = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-top: 5px;
`;
const PriceP2 = styled(PriceP1)`
  font-size: 16px;
  line-height: 20px;
  margin-top: 0;
  margin-left: 2px;
`;

const Price = styled.div`
  width: 88px;
  height: 40px;
  background: ${ThemeData.colors.blue};
  border-radius: 16px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Date = styled.div`
  border-radius: 16px;
  width: 48px;
  height: 48px;
  background: ${ThemeData.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateP = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #404040;
  text-align: center;
`;

const PopularDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px 0 0 0;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

const Content = styled.div<any>`
  width: 22.222%;
  min-width: 320px;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px 15.97px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const RightButton = styled(LeftButton)`
  margin-left: 30px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #424242;
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 57px;
  align-items: center;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2c2c2c;
`;
const Main = styled.div`
  width: 100%;
 padding-bottom: 21px;
  background: transparent;
  margin-top: 33px;
  position: relative;
  border-bottom: 1px solid rgba(18, 18, 18, 0.1);
`;
