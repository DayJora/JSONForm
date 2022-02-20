import React, { FC } from 'react';
import * as E from './elements';
import * as T from 'features/formGenerator/types';

const PAGES: T.IPage[] = ['config', 'result'];

export const Nav: FC<T.INavProps> = ({ callback, current }) => {
  return (
    <E.Wrapper>
      {PAGES.map((p, i) => (
        <E.NavLink key={i} onClick={() => callback(p)} isActive={current === p}>
          {p}
        </E.NavLink>
      ))}
    </E.Wrapper>
  );
};
