import "../../App.css";
import styled from "styled-components";
import { AccountBox } from "./loginComponent/accountBox";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <LoginContainer>
      <AccountBox />
    </LoginContainer>
  );
}

export default Login;
