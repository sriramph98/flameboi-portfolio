import { type SchemaTypeDefinition } from 'sanity';

import { marketItem } from './marketItem';
import { release } from './release';
import { social } from './social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [release, social, marketItem],
};
