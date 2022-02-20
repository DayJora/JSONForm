import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 600px;
  padding: 20px;
  box-shadow: 0 0 0 6px #fff, 0 0 0 12px #888;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 24px;
  line-hight: 32px;
  font-weight: bold;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewWrap = styled.div`
  display: flex;
  padding: 20px 0 0 0;
`;

export const Label = styled.label``;

export const Input = styled.input``;

export const TextArea = styled.textarea`
  resize: none;
`;

export const RadiosWrap = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Button = styled.button`
  margin-right: 12px;
  padding: 5px 15px;
`;
