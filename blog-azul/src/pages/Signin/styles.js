import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-image: url('/imgs/background.jpeg');
  background-size: 100% 100%; 
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const BLabel = styled.label`
  font-size: 48px;
  font-weight: 600;
  padding: 20px;
  color: #FFFF00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const TLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 0 100px;
`;

export const Label = styled.label`
  font-size: 48px;
  font-weight: 600;
  color: #FFFF00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #32CD99;
  font-weight: 600;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
