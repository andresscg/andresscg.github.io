import styled from "styled-components";

export const Boxes = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  max-height: 144px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-height: 210px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-height: 135px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxCustom = styled.div`
  background: #212d45;
  border-radius: 12px;
  max-height: 350px;
  padding: 24px;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-height: 210px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-height: 335px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-height: 310px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border: 3px solid transparent;
  border-bottom-color: #945dd6;
  color: #13adc7;
  transition: 0.4s;
  &:focus {
    transition: 0.4s;
    border-radius: 10px;
    outline: none;
    border-color: #945dd6;
  }
`;

export const TextArea = styled.textarea`
  min-height: 100px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border: 3px solid transparent;
  border-bottom-color: #945dd6;
  color: #13adc7;
  transition: 0.4s;
  max-width: 100%;
  resize: none;
  &:focus {
    transition: 0.4s;
    border-radius: 10px;
    outline: none;
    border-color: #945dd6;
  }
`;

export const FormButton = styled.input`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  width: 262px;
  height: 64px;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    transition: all 0.5s ease-in-out;
  }
  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    width: 184px;
    height: 48px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    width: 100%;
    height: 32px;
  }
`;
