import React from "react";
import styled from "styled-components";
import { ThemeData } from "./ThemeComponent";

export default function HeaderComponent() {
  return (
    <Header>
      <Logo src="/assets/TradeTicket.svg" alt="logo" />
      <Form>
        <Input type="text" placeholder="Search for tickets..." />
        <ButtonSearch>
          <img src="/assets/icon-search.svg" alt="" />
        </ButtonSearch>
      </Form>
      <ButtonsDiv>
        <ButtonLogin>Log in</ButtonLogin>
        <ButtonSignUp>Sign Up</ButtonSignUp>
      </ButtonsDiv>
    </Header>
  );
}

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 28.3333%;
`;
const ButtonLogin = styled.button`
  background: ${ThemeData.colors.blue};
  border-radius: 48px;
  padding: 17.5px 40.5px;
  border: 1px solid ${ThemeData.colors.blue};
  color: ${ThemeData.colors.white};
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
const ButtonSignUp = styled(ButtonLogin)`
  background: transparent;
  color: ${ThemeData.colors.blue};
  margin-left: 24px;
`;

const ButtonSearch = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${ThemeData.colors.blue};
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Form = styled.form`
  width: 50.9722222%;
  background: red;
  padding: 13px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${ThemeData.colors.silver};
  border: 1px solid ${ThemeData.colors.silver};
  border-radius: 48px;
  margin-left: 10.277778%;
  margin-right: 2.2222222%;
`;
const Input = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  background: transparent;
  color: ${ThemeData.colors.darkGray};
  border: none;
`;
const Logo = styled.img`
  height: 36px;
  width: 158px;
`;
const Header = styled.div<any>`
  width: 100%;
  background: ${ThemeData.colors.white};
  display: flex;
  flex-direction: row;
  padding: 24px 40px;
  align-items: center;
  border: 1px solid #EDEDED;
  z-index: 100;
`;

function useForm() {
  throw new Error("Function not implemented.");
}
