import { TransformerImpl } from './impl/interfaces';
import { Transformer } from './types';

export * from './types'
export function create(): Transformer {
  return new TransformerImpl()
}