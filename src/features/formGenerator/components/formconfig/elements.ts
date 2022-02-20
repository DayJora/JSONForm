import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0 0 0 6px #fff, 0 0 0 12px #888;

  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
`;

export const Content = styled.textarea`
  resize: none;
`;

export const ButtonSubmit = styled.button`
  width: 160px;
  height: 40px;
  align-self: flex-end;
  cursor: pointer;
`;

export const Error = styled.div`
  color: red;
  font-weight: bold;
`;
