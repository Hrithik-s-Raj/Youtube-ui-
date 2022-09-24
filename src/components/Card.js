import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://static-cse.canva.com/blob/942340/1600w-wK95f3XNRaM.jpg"
        />
        <Details>
          <ChannelImage
            type={type}
            src="https://avatars.githubusercontent.com/u/48581295?v=4"
          />
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
  width: ${(props) => props.type !== "sm" && "360px"};

  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  margin-left: 7px;
  margin-right: 7px;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "1px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === "sm" ? "none" : "flex")};
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
