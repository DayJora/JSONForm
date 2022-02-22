import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import { IJSON, TItem } from './types';

const ajv = new Ajv();

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

export const validate: ValidateFunction<IJSON> = ajv.compile(schema);
