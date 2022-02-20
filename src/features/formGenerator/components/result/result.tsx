import React, { FC } from 'react';
import * as E from './elements';
import { IJSON, TItem } from '../formconfig/types';
import {
  NumberFieldView,
  TextAreaView,
  TextFieldView,
  CheckboxView,
  DateFieldView,
  RadiosView,
  ButtonView,
} from './elementview';

interface IResultProps {
  data: IJSON;
}

export const ResultComponent: FC<IResultProps> = ({ data }) => {
  const elements: Array<TItem> = [];
  const buttons: Array<TItem> = [];
  data.items.forEach((d) => {
    d.type === 'button' ? buttons.push(d) : elements.push(d);
  });

  const getElementView = (el: TItem, i: number) => {
    switch (el.type) {
      case 'numberfield':
        return <NumberFieldView key={i} {...el} />;

      case 'textfield':
        return <TextFieldView key={i} {...el} />;

      case 'textarea':
        return <TextAreaView key={i} {...el} />;

      case 'checkbox':
        return <CheckboxView key={i} {...el} />;

      case 'datefield':
        return <DateFieldView key={i} {...el} />;

      case 'radio':
        return <RadiosView key={i} {...el} />;

      case 'button':
        return <ButtonView key={i} {...el} />;

      default:
        break;
    }
  };

  return (
    <E.Wrapper>
      <E.Block>
        {data.title && <E.Title>{data.title}</E.Title>}
        {elements.map((e, i) => getElementView(e, i))}
      </E.Block>
      {buttons.length > 0 && (
        <E.ButtonsBlock>{buttons.map((e, i) => getElementView(e, i))}</E.ButtonsBlock>
      )}
    </E.Wrapper>
  );
};
