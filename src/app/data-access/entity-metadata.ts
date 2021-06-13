import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Post: {},
};

const pluralNames = {
  Post: 'posts',
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
