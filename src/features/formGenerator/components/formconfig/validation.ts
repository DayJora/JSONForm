import Ajv, { JSONSchemaType } from 'ajv';
import { IJSON, TItem } from './types';

export const getValidation = (data: string): boolean => {
  const ajv = new Ajv();
  const formData = JSON.parse(data);

  const itemSchema: JSONSchemaType<TItem> = {
    anyOf: [
      {
        type: 'object',
        properties: {
          label: { type: 'string' },
          type: {
            type: 'string',
            enum: ['button', 'checkbox', 'datefield', 'numberfield', 'textarea', 'textfield'],
          },
        },
        required: ['label', 'type'],
      },
      {
        type: 'object',
        properties: {
          label: { type: 'string' },
          type: { type: 'string', enum: ['radio'] },
          radios: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                label: { type: 'string' },
              },
              required: ['label'],
            },
          },
        },
        required: ['label', 'type', 'radios'],
      },
    ],
  };

  const itemsSchema: JSONSchemaType<Array<TItem>> = {
    type: 'array',
    items: itemSchema,
  };

  const schema: JSONSchemaType<IJSON> = {
    type: 'object',
    properties: {
      title: { type: 'string', nullable: true },
      items: itemsSchema,
    },
    required: ['items'],
  };

  const validate = ajv.compile(schema);
  const isValid = validate(formData);

  return isValid;
};
