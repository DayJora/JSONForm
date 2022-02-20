export interface IJSON {
  title?: string;
  items: Array<TItem>;
}

export type TItem = IField | IRadioField;

export interface IField {
  label: string;
  type: TFieldType;
}

export type TFieldType =
  | 'numberfield'
  | 'checkbox'
  | 'datefield'
  | 'textfield'
  | 'textarea'
  | 'button';

export interface IRadioField {
  label: string;
  type: 'radio';
  radios: IRadio[];
}

interface IRadio {
  label: string;
}
