import React from "react";
import {
  Card,
  Container,
  Heading,
  Info,
  Item,
  Photo,
  TextBlock,
  Wrapper,
} from "./styles";
import MyPhoto from "../../assets/img/me.webp";

function Home() {
  return (
    <Container>
      <Card>
          <Heading className="title">Gustavo Cardoso Correa</Heading>
        <Wrapper>
          <Photo src={MyPhoto} type="image/webp" />
          <Info>
            <Item>
              <span>Currently Live in: </span>
              <span>São Paulo - SP, Brasil </span>
            </Item>
            <Item>
              <span>Working with: </span>
              <a href="https://www.resolvaclub.com">Resolva Club</a>
            </Item>
            <TextBlock>
              <span className="title">Spoken Languages: </span>
              <div className="inner">
                <span>Portuguese</span>
                <span>English</span>
              </div>
            </TextBlock>
            <TextBlock>
              <span className="title">Programming Languages: </span>
              <div className="inner">
                <span>Python</span>
                <span>JavaScript</span>
              </div>
            </TextBlock>
            <TextBlock>
              <span className="title">Currently learning:</span>
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
