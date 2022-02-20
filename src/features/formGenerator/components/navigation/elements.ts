import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

export const NavLink = styled.div<{ isActive: boolean }>`
  width: 200px;
  height: 60px;
  text-transform: capitalize;
  font-size: 24px;
  line-height: 32px;
  background-color: ${({ isActive }) => (isActive ? 'lightgray' : 'white')};

  cursor: pointer;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 0 6px #fff, 0 0 0 12px #888;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: none;
      z-index: 2;
    `};
`;
