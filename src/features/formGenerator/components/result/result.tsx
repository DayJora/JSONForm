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

  const getElementView = (el: TItem) => {
    switch (el.type) {
      case 'numberfield':
        return <NumberFieldView {...el} />;

      case 'textfield':
        return <TextFieldView {...el} />;

      case 'textarea':
        return <TextAreaView {...el} />;

      case 'checkbox':
        return <CheckboxView {...el} />;

      case 'datefield':
        return <DateFieldView {...el} />;

      case 'radio':
        return <RadiosView {...el} />;

      case 'button':
        return <ButtonView {...el} />;

      default:
        break;
    }
  };

  return (
    <E.Wrapper>
      <E.Block>
        {data.title && <E.Title>{data.title}</E.Title>}
        {elements.map((e, i) => (
          <React.Fragment key={i}>{getElementView(e)}</React.Fragment>
        ))}
      </E.Block>
      {buttons.length > 0 && (
        <E.ButtonsBlock>
          {buttons.map((e, i) => (
            <React.Fragment key={i}>{getElementView(e)}</React.Fragment>
          ))}
        </E.ButtonsBlock>
      )}
    </E.Wrapper>
  );
};
