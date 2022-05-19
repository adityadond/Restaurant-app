import React from "react";
import styled from "styled-components";
import "./Carousel.css";

const Heading = styled.h1`
  font-size: clamp(2rem, 4vw, 4rem);
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  height: min(800px, 60vh);
  position: relative;
`;

const SubHeading = styled.h1`
  font-size: 1rem;
  font-size: clamp(1.2rem, 2vw, 1.75rem);
  font-weight: 300;
  text-transform: uppercase;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;
function Carousel({ heading, subHeading, images }) {
  return (
    <Wrapper>
      <div className="carrasouel__img">
        <img src={images} alt="logo" />
      </div>
      <Content>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </Content>
    </Wrapper>
  );
}

export default Carousel;
