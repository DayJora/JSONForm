import React, { FC } from 'react';
import { IRadioField } from '../formconfig/types';
import * as E from './elements';
import _ from 'lodash';

interface IProps {
  label: string;
}

export const NumberFieldView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Label>
        {label} <E.Input type="number" />
      </E.Label>
    </E.ViewWrap>
  );
};

export const TextAreaView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Label>
        {label} <E.TextArea cols={20} rows={5} />
      </E.Label>
    </E.ViewWrap>
  );
};

export const TextFieldView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Label>
        {label} <E.Input type="text" />
      </E.Label>
    </E.ViewWrap>
  );
};

export const CheckboxView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Label>
        {label} <E.Input type="checkbox" />
      </E.Label>
    </E.ViewWrap>
  );
};

export const DateFieldView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Label>
        {label} <E.Input type="date" />
      </E.Label>
    </E.ViewWrap>
  );
};
export const ButtonView: FC<IProps> = ({ label }) => {
  return (
    <E.ViewWrap>
      <E.Button>{label}</E.Button>
    </E.ViewWrap>
  );
};

export const RadiosView: FC<IRadioField> = ({ label, radios }) => {
  const genUniqName = _.uniqueId();
  return (
    <E.ViewWrap>
      <E.Label>{label}</E.Label>
      <E.RadiosWrap>
        {radios.map((r, i) => (
          <E.Label key={i}>
            {r.label} <E.Input type="radio" name={genUniqName} />
          </E.Label>
        ))}
      </E.RadiosWrap>
    </E.ViewWrap>
  );
};
