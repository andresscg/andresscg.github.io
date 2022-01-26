import styled from "styled-components"

export const Boxes = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  max-height: 144px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.lg} {
    max-height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    max-height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxCustom = styled.div`
  background: #212D45;
  border-radius: 12px;
  max-height: 350px;
  padding: 24px;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.lg} {
    max-height: 210px;
  }

  @media ${props => props.theme.breakpoints.md} {
    max-height: 335px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-height: 310px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`

export const Input = styled.input`
  height: 40px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border: 3px solid transparent;
  border-bottom-color: #945DD6;
  color: #13ADC7;
  transition: 0.4s;
  &:focus {
    transition: 0.4s;
    border-radius: 10px;
    outline: none;
    border-color: #945DD6;
  }
`

export const TextArea = styled.textarea`
  min-height: 100px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border: 3px solid transparent;
  border-bottom-color: #945DD6;
  color: #13ADC7;
  transition: 0.4s;
  max-width: 100%;
  resize: none;
  &:focus {
    transition: 0.4s;
    border-radius: 10px;
    outline: none;
    border-color: #945DD6;
  }
`