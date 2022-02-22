import React, { FC, useState, useLayoutEffect } from 'react';
import * as E from './elements';
import { validate } from './validation';
import { IJSON } from './types';

interface IConfigProps {
  callback: (data: IJSON) => void;
}

export const FormConfigComponent: FC<IConfigProps> = ({ callback }) => {
  const [content, setContent] = useState(() => localStorage.getItem('formConfig') ?? '');
  const [isValid, setValid] = useState<boolean>(true);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentContentIsValid = validate(JSON.parse(content));
    setValid(currentContentIsValid);
    if (currentContentIsValid) {
      callback(JSON.parse(content) as IJSON);
    }
  };

  const changeContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value);

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
