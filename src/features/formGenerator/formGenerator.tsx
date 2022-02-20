import React, { useState } from 'react';
import { Nav, ResultComponent, FormConfigComponent } from './components';
import { IJSON } from './components/formconfig/types';
import { IPage } from './types';
import * as E from './elements';

export const FormGenerator = () => {
  const [currentNav, setNav] = useState<IPage>('config');
  const [currentData, setData] = useState<IJSON>({ items: [] });

  const getContent = (name: IPage) => {
    switch (name) {
      case 'config':
        return <FormConfigComponent callback={setData} />;

      case 'result':
        return <ResultComponent data={currentData} />;

      default:
        break;
    }
  };

  return (
    <E.Wrapper>
      <Nav callback={setNav} current={currentNav} />
      {getContent(currentNav)}
    </E.Wrapper>
  );
};
