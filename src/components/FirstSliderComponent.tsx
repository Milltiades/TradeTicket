import React from 'react'
import styled from 'styled-components'


export default function FirstSliderComponent() {
  return (
    <FirstSlider>
        <SldierButtonsDiv>
            <IconsDiv>
            <LeftButton>
                <img src="/assets/left.svg" alt="" />
            </LeftButton>
            <ImgEllipse src="/assets/Ellipse.svg" alt="" />
            <RightButton>
                <img src="/assets/right.svg" alt="" />
            </RightButton>
            </IconsDiv>
        </SldierButtonsDiv>
     </FirstSlider>
  )
}


const ImgEllipse = styled.img`
    margin: 0 16px;
`
const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
`
const LeftButton = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #424242;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: 94px;
    cursor: pointer;
    transition: all .3s ease;
`
const RightButton = styled(LeftButton)`
    margin-left: 0;
`

const SldierButtonsDiv = styled.div`
     background-image: url("/assets/firstSliderRectangle.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 105px;
    width: 236px;
    right: -20px;
    bottom: -60px;
    
`
const FirstSlider = styled.div`
   width: calc(100% - 40px);
    height: 208px;
    border-radius: 32px;
    background-image: url("/assets/firstSlider.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 40px 0 0;
    position: relative;
    display: flex;
    flex-direction: row;
`