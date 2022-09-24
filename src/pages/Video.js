import React from "react";
import styled from "styled-components";

function Video() {
  return (
    <Container>
      <Content>Content</Content>
      <Recommendation>Recconmedation</Recommendation>
    </Container>
  );
}

export default Video;

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-left: 20px;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;
