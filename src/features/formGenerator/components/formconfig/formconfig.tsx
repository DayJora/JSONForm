import React, { FC, useState, useEffect, useLayoutEffect } from 'react';
import * as E from './elements';
import { getValidation } from './validation';
import { IJSON } from './types';

interface IConfigProps {
  callback: (data: IJSON) => void;
}

export const FormConfigComponent: FC<IConfigProps> = ({ callback }) => {
  const [content, setContent] = useState(() => localStorage.getItem('formConfig') ?? '');
  const [isValid, setValid] = useState<boolean | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValid(getValidation(content));
  };

  const changeContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value);

  useEffect(() => {
    if (isValid) {
      callback(JSON.parse(content) as IJSON);
      setValid(null);
    }
  }, [isValid]);

  useLayoutEffect(() => {
    return () => {
      localStorage.setItem('formConfig', content);
    };
  });

  return (
    <E.Wrapper>
      <E.Form onSubmit={submitHandler}>
        <E.Content value={content} onChange={changeContentHandler} cols={30} rows={20} />
        {isValid !== null && !isValid && <E.Error>JSON NOT VALID</E.Error>}
        <E.ButtonSubmit type="submit">Apply</E.ButtonSubmit>
      </E.Form>
    </E.Wrapper>
  );
};
