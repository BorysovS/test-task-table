import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const Modal = styled.div`
  position: "relative";
  padding: 16px 24px;
  width: 400px;
  /* height: 400px; */
  background: white;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  z-index: 2000;
  transition: 0.5s;
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  right: 5px;
  top: 5px;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Input = styled.input`
  width: 300px;
  display: block;
  margin-bottom: 18px;
  padding: 8px 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrMsg = styled.p`
  color: red;
  font-weight: bold;
`;
