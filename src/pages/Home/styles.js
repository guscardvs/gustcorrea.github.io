import styled from "styled-components";
import Scrollbars from "react-custom-scrollbars";

export const Container = styled.main`
  min-height: 100%;
  width: 100%;
  background: linear-gradient(
    145deg,
    rgba(21, 101, 192, 1),
    rgba(26, 35, 126, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.section`
  @media only screen and (min-width: 768px) {
    height: 36rem;
    width: 50rem;
    padding: 1.5rem 3rem;
  }
  width: 80%;
  height: 80%;
  background-color: rgba(48, 63, 159, 1);
  box-shadow: 1px 2px 4px #303030;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    & .rotate {
      transform: rotateY(180deg);
    }
  }
`;

export const Heading = styled.h1`
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 2.5rem;
  }
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: white;
  letter-spacing: 1px;
`;

export const Flip = styled.span`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  display: flex;
  @media (max-width: 767px) {
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    perspective: 1000px;
    width: 16rem;
    height: 24rem;

    & .flip,
    & .back-flip {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }

    & .back-flip {
      transform: rotateY(180deg);
    }
  }
`;

export const Photo = styled.img`
  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
  }
  width: 16rem;
  height: 24rem;
  box-shadow: 1px 1px 1px #303030;
`;
export const InfoOuter = styled.div`
  padding: 0.35rem 0 0.35rem 0.75rem;

  @media only screen and (max-width: 767px) {
    width: 16rem;
    height: 24rem;
  }
  background-color: rgba(63, 81, 181, 1);
  box-shadow: 1px 1px 1px #303030;
`;

export const Info = styled(Scrollbars)`
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 26rem !important;
    height: 24rem !important;
  }

  color: white;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0.3rem 0;
  justify-content: space-between;
  align-items: center;

  & :first-child {
    font-size: 14px;
    font-weight: 600;
  }

  & :not(:first-child) {
    font-size: 13px;
    font-weight: 400;
  }
  & a {
    border: 1px dashed #ddd;
    transition: background-color 0.1s ease;
    padding: 3px 5px;
    &:hover {
      background-color: rgba(48, 63, 159, 1);
    }
  }
`;

export const TextBlock = styled.div`
  background-color: rgba(48, 63, 159, 1);
  margin-top: 1rem;
  padding: 0.35rem 0.75rem;
  width: 95%;
  transition: background-color 0.2s ease;
  & .inner {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    & *::before {
      content: " - ";
    }
    & a {
      border-bottom: 1px dashed #aaa;
      transition: background-color 0.1s ease;
      padding: 3px 5px;
      width: 30%;
      &:hover {
        background-color: rgba(48, 63, 159, 1);
      }
    }
  }
  &:hover {
    background-color: rgba(57, 73, 171, 1);
  }
`;
