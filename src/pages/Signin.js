import styled from "styled-components";
import React from "react";

function Signin(props) {
  console.log(props);
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>Sin in with email and password</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>

        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="Password" />
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}

export default Signin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 56px);
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft}
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width:100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  margin-left: 0px;
  display: flex;
  font-size: 10px;
  margin-top: 8px;
  gap: 120px;

  color: ${({ theme }) => theme.text};
`;

const Links = styled.div`
  margin-left: 30px;
`;

const Link = styled.span`
  margin: 10px;
  color: ${({ theme }) => theme.text};
  margin-top: 8px;
`;
