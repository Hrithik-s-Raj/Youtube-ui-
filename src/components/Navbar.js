import styled from "styled-components";
import React from "react";
import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlined />
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  position: absolute;
  padding: 5px;
  border: 1px solid #ccc;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 19px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;
