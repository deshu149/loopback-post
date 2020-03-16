import {Entity, model, property} from '@loopback/repository';

@model()
export class Posts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;


  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
