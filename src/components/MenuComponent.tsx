import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeData } from "./ThemeComponent";

export default function MenuComponent({
  hover,
  hover3,
  handleMouseEnter,
  handleMouseEnter3,
  handleMouseLeave,
  handleMouseLeave3,
  setIsConcerts,
  isConcerts
  
}: {
  isConcerts: any
  setIsConcerts: any;
  hover: any;
  setHover: any;
  hover3: any;
  setHover3: any;
  handleMouseEnter: any;
  handleMouseEnter3: any;
  handleMouseLeave: any;
  handleMouseLeave3: any;
}) {
  const navigate = useNavigate();

  return (
    <Menu>
      <ul>
        <Li>
          <LiButton
            onClick={() => navigate("/")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hover ? (
              <Icon src="/assets/homeDark.svg" alt="" />
            ) : (
              <Icon src="/assets/home.svg" alt="" />
            )}
            <img src={""} alt="" />
            Home
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/events.svg" alt="" />
            Events
          </LiButton>
        </Li>
        <Li>
          <LiButton
            onClick={() => {
              setIsConcerts(true);
              navigate("/concerts");
            }}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            {hover3 ? (
              <Icon src="/assets/concertsDark.svg" alt="" />
            ) : (
              <Icon src="/assets/concerts.svg" alt="" />
            )}
            Concerts
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/transport.svg" alt="" />
            Transport
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/sport.svg" alt="" />
            Sport
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/flights.svg" alt="" />
            Flights
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/transport.svg" alt="" />
            Transport
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/sport.svg" alt="" />
            Sport
          </LiButton>
        </Li>
        <Li>
          <LiButton>
            <Icon src="/assets/flights.svg" alt="" />
            Flights
          </LiButton>
        </Li>
      </ul>
    </Menu>
  );
}

const Icon = styled.img`
  margin-left: 24.82px;
  width: 18.35px;
  height: 18.33px;
  margin-right: 12.82px;
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;
const LiButton = styled.button`
  border: none;
  border-left: 4px solid transparent;
  align-items: center;
  color: ${ThemeData.colors.darkBlue};
  cursor: pointer;
  transition: all 0.3s ease;
  height: 32px;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  &:hover {
    border-left: 4px solid ${ThemeData.colors.darkBlue};
    font-weight: 500;
  }
`;

const Menu = styled.div`
  width: 17.77777%;
  min-width: 256px;
  background: ${ThemeData.colors.white};
  border-radius: 32px;
  padding: 60px 0 40px;
  position: relative;
  top: -16px;
`;
