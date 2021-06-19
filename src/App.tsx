import styled from "@emotion/styled";
import React from "react";
import { Global, css } from "@emotion/react";
import "./style.css";
import FormControl from "./components/form-control/Form-Control";
import Button from "./components/button/Button";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  p {
    margin-top: 30px;
  }
  a {
    text-decoration: none;
    color: lightblue;
  }
`;
const App = () => {
  const data = [
    { label: "Email", id: "", type: "email" },
    { label: "Password", id: "", type: "password" },
  ];

  return (
    <>
      <Container>
        <h1>Please Login</h1>
        <form>
          {data.map((el, idx) => (
            <FormControl label={el.label} id={el.id} type={el.type} key={el.id}></FormControl>
          ))}

          <Button />
          <p>
            {`Don't have an account?`} <a href="#">Register</a>
          </p>
        </form>
      </Container>
    </>
  );
};

export default App;
