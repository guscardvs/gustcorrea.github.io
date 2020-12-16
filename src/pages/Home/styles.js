import styled from "styled-components";

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
  height: 36rem;
  width: 50rem;
  background-color: rgba(48, 63, 159, 1);
  box-shadow: 1px 2px 4px #303030;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
`;

export const Heading = styled.h1`
  font-weight: 700;
  color: white;
	text-align: center;
	margin-bottom: 2.5rem;
	font-size: 32px;
	letter-spacing: 1px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.img`
  width: 16rem;
  height: 24rem;
  box-shadow: 1px 1px 1px #303030;
  margin-right: 2rem;
`;

export const Info = styled.div`
  width: 26rem;
  height: 24rem;
  background-color: rgba(63, 81, 181, 1);
  box-shadow: 1px 1px 1px #303030;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0.35rem 0.75rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
	width: 100%;
	transition: background-color .2s ease;
  & .inner {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    & *::before {
      content: " - ";
    }
	}
	&:hover{
		background-color: rgba(57,73,171 ,1);
	}
`;
