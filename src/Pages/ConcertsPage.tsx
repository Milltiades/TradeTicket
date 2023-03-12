import React, { useState } from "react";
import styled from "styled-components";
import MenuComponent from "../components/MenuComponent";
import { ThemeData } from "../components/ThemeComponent";

export default function HomePage() {
  const [hover, setHover] = useState<any>(false);
  const [hover3, setHover3] = useState<any>(false);
  const [available, setAvailable] = useState<any>(false);

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
        hover={hover}
        setHover={setHover}
        hover3={hover3}
        setHover3={setHover3}
        handleMouseEnter={handleMouseEnter}
        handleMouseEnter3={handleMouseEnter3}
        handleMouseLeave={handleMouseLeave}
        handleMouseLeave3={handleMouseLeave3} 
        setIsConcerts={undefined}  
        isConcerts={undefined}    />

      <MainContentDiv>
        <BackgroundImgDiv />
        <ContentUnderDiv display={available ? "none" : "flex"}>
          <ContentLeft>
            <H1Left>VINI VICI - Powered by Mono Hall Tbilisi</H1Left>
            <Pdescription>Description</Pdescription>
            <PLeft>
              On April 8 in Tbilisi, organized by MONO HALL, one of the largest
              events of VINI VICI, one of the most popular duos in electronic
              music and especially in the Psytrance genre, the leader of
              practically all music charts and a permanent guest of the largest
              electronic music festivals, will be held.
              <br />
              <br />
              📍 Location information will be added soon.
              <br />
              <br />
              VINI VICI is a project founded in Israel in the early 2000s by
              Aviram Saharai and Matan Kadosh, which has been developing and
              touring major cities around the world for decades.
              <br />
              <br />
              VINI VICI has achieved success at various stages of creative
              development, including: In 2017, the duo took the #72 position in
              the international rating of "Dj Mag Top 100 Dj's", after which
              they won the title of DJ of the year at the Walla Nightlife Awards
              in the same year. Also in 2015, 2016, 2017, VINI VICI became the
              best-selling Psytrance artist. Their work is diverse, with
              collaborations with artists such as: Armin Van Buuren, Dimitry
              Vegas & Like Mike, Steve Aoki, W&W, KSHMR, Astrix, Timmy Trumpet
              and others.
            </PLeft>
          </ContentLeft>
          <ContetnRight>
            <RightHead>
              <Icon src="/assets/triangle.svg" alt="" />
              <H2Right>Saturday, 08 April 22:00</H2Right>
              <PRight>Tbilisi, Monohall</PRight>
              <H1Right>
                <Span>From</Span> / $70.00
              </H1Right>
            </RightHead>
            <ButtonsDiv>
              <Button1 onClick={() => setAvailable(true)}>
                See available tickets
              </Button1>
              <Button2>Sell a ticket</Button2>
              <Button3>
                <CartIcon src="/assets/cart.svg" alt="" />
                Add to cart
              </Button3>
            </ButtonsDiv>
          </ContetnRight>
        </ContentUnderDiv>
        <AvailableTicketsDiv display={available ? "block" : "none"}>
            <AvailableheaderDivIcon>
          <H1Left>VINI VICI - Powered by Mono Hall Tbilisi</H1Left>
          <img src="/assets/navIcon.svg" alt="" />
          </AvailableheaderDivIcon>
          <AvailableH2>182 Available Tickets</AvailableH2>
          

          <AvailableContentDiv>
            <AvailableContent>
              <AvailableContetnLeft>
                <img src="/assets/user2.png" alt="" />
                <AvailableContentText>
                  <AvailableContentH2>John B.</AvailableContentH2>
                  <AvailableContentP1>Block 01, Seat 06</AvailableContentP1>
                  <AvailableContentP2>
                    “First block of seats with an amazing view”
                  </AvailableContentP2>
                </AvailableContentText>
              </AvailableContetnLeft>
              <AvailableContetnRight>
                <AvailableContentRightH1>$70.00</AvailableContentRightH1>
                <AvailableContentRightP>/ticket</AvailableContentRightP>
              </AvailableContetnRight>
            </AvailableContent>
          </AvailableContentDiv>

          <AvailableContentDiv>
            <AvailableContent>
              <AvailableContetnLeft>
                <img src="/assets/user1.png" alt="" />
                <AvailableContentText>
                  <AvailableContentH2>Emily S.</AvailableContentH2>
                  <AvailableContentP1>VIP Section, Seat 12, Seat 11</AvailableContentP1>
                  <AvailableContentP2>
                  “Best 2 seats in the VIP Section, food included”
                  </AvailableContentP2>
                </AvailableContentText>
              </AvailableContetnLeft>
              <AvailableContetnRight>
                <AvailableContentRightH1>$120.00</AvailableContentRightH1>
                <AvailableContentRightP>/ticket</AvailableContentRightP>
              </AvailableContetnRight>
            </AvailableContent>
          </AvailableContentDiv>

          <AvailableContentDiv>
            <AvailableContent>
              <AvailableContetnLeft>
                <img src="/assets/user3.png" alt="" />
                <AvailableContentText>
                  <AvailableContentH2>Paul A.</AvailableContentH2>
                  <AvailableContentP1>Balcony Section</AvailableContentP1>
                  <AvailableContentP2>
                  “The best view ever for the best price”
                  </AvailableContentP2>
                </AvailableContentText>
              </AvailableContetnLeft>
              <AvailableContetnRight>
                <AvailableContentRightH1>$83.20</AvailableContentRightH1>
                <AvailableContentRightP>/ticket</AvailableContentRightP>
              </AvailableContetnRight>
            </AvailableContent>
          </AvailableContentDiv>

          <AvailableContentDiv>
            <AvailableContent>
              <AvailableContetnLeft>
                <img src="/assets/user2.png" alt="" />
                <AvailableContentText>
                  <AvailableContentH2>Emily S.</AvailableContentH2>
                  <AvailableContentP1>Front Stage</AvailableContentP1>
                  <AvailableContentP2>
                  “Perfect place for this concert”
                  </AvailableContentP2>
                </AvailableContentText>
              </AvailableContetnLeft>
              <AvailableContetnRight>
                <AvailableContentRightH1>$100.00</AvailableContentRightH1>
                <AvailableContentRightP>/ticket</AvailableContentRightP>
              </AvailableContetnRight>
            </AvailableContent>
          </AvailableContentDiv>

          
        </AvailableTicketsDiv>
      </MainContentDiv>
    </Div>
  );
}

const AvailableheaderDivIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const CartIcon = styled.img`
    margin-right: 12px;
`

const AvailableContetnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AvailableContentRightP = styled.p`
text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #424242;
`;

const AvailableContentRightH1 = styled.h1`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #424242;
  text-align: center;
`;

const AvailableContentP1 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #383838;
  margin-top: 1.98px;
`;
const AvailableContentP2 = styled.p`
  margin-top: 5.94px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

const AvailableContentH2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #383838;
`;
const AvailableContetnLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
`;
const AvailableContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;
const AvailableContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

const AvailableContent = styled.div`
margin-top: 16px;
padding: 0 33px 0 20px;
  width: 100%;
  background: #e8eaff;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 104px;
`;
const AvailableTicketsDiv = styled.div<any>`
  padding: 32px 64px 0 32px;
  width: 100%;
  display: ${(props) => props.display};
  background: transparent;
`;
const AvailableH2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${ThemeData.colors.blue};
  margin-top: 13px;
`;

const Button1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${ThemeData.colors.blue};
  color: ${ThemeData.colors.white};
  border: 1px solid ${ThemeData.colors.blue};
  border-radius: 48px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  height: 56px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Button2 = styled(Button1)`
  margin-top: 16px;
  background: ${ThemeData.colors.white};
  color: ${ThemeData.colors.blue};
  border: 1px solid ${ThemeData.colors.blue};
`;
const Button3 = styled.button`
  margin-top: 36px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${ThemeData.colors.blue};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  cursor: pointer;
`;

const ButtonsDiv = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 11px;
  color: #4c4c4c;
`;

const H2Right = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #4c4c4c;
  margin-top: 22px;
`;

const PRight = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1449a3;
  margin-top: 8px;
`;
const H1Right = styled.h1`
  margin-top: 34px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #2c2b5c;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const RightHead = styled.div`
  width: 100%;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;

const ContetnRight = styled.div`
  width: 31.2%;
  border-left: 1px solid #dedfe6;
`;

const H1Left = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2c2b5c;
`;
const PLeft = styled.p`
  margin-top: 28px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #4d4d4d;
`;
const Pdescription = styled.p`
  margin-top: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgba(66, 66, 66, 0.8);
`;

const ContentLeft = styled.div`
  width: 68.8%;
  display: flex;
  flex-direction: column;
  margin-right: 61px;
  padding-left: 31px;
`;

const ContentUnderDiv = styled.div<any>`
  display: ${(props) => props.display};
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  padding-bottom: 105px;
`;

const BackgroundImgDiv = styled.div`
  width: 100%;
  height: 296px;
  border-radius: 16px;

  background-image: url("/assets/image16.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainContentDiv = styled.div`
  width: 100%;
  height: auto;
  background: ${ThemeData.colors.white};
  margin: 32px 88px 0 72px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Div = styled.div`
  padding-left: 24px;
  z-index: -10;
  display: flex;
  flex-direction: row;
`;
