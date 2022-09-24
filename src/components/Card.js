import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card() {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://static-cse.canva.com/blob/942340/1600w-wK95f3XNRaM.jpg" />
        <Details>
          <ChannelImage src="https://avatars.githubusercontent.com/u/48581295?v=4" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Hrithik.s.raj</ChannelName>
            <Info>1000000 views - 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
  margin-left: 7px;
  margin-right: 7px;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;

  font-weight: 500;

  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  margin: 9px 0px; ;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
