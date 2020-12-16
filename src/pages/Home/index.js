import React, { useState } from "react";
import {
  Card,
  Container,
  Flip,
  Heading,
  Info,
  Item,
  Photo,
  TextBlock,
  Wrapper,
} from "./styles";
import MyPhoto from "../../assets/img/me.webp";

function Home() {
  const [rotate, setRotate] = useState(false);
  const phone = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Container>
      <Card>
        <Heading className="title">Gustavo Cardoso Correa</Heading>
        {phone ? <Flip className="title">Flip!</Flip> : <></>}
        <Wrapper
          onClick={() => {
            setRotate(!rotate);
          }}
          className={rotate ? "rotate" : ""}
        >
          <Photo src={MyPhoto} type="image/webp" className="flip" />
          <Info className="back-flip">
            <Item>
              <span>I Live in: </span>
              <span>São Paulo - SP, Brasil </span>
            </Item>
            <Item>
              <span>Working with: </span>
              <a
                href="https://www.resolvaclub.com"
                target="_blank"
                rel="noreferrer"
              >
                Resolva Club
              </a>
            </Item>
            <TextBlock>
              <span className="title">I speak: </span>
              <div className="inner">
                <span>Portuguese</span>
                <span>English</span>
              </div>
            </TextBlock>
            <TextBlock>
              <span className="title">I develop with: </span>
              <div className="inner">
                <span>Python</span>
                <span>JavaScript</span>
              </div>
            </TextBlock>
            <TextBlock>
              <span className="title">I am learning:</span>
              <div className="inner">
                <span>TypeScript and React Native</span>
                <span>Golang</span>
                <span>GitHub Actions</span>
                <span>GitLab CI</span>
              </div>
            </TextBlock>
          </Info>
        </Wrapper>
      </Card>
    </Container>
  );
}

export default Home;
