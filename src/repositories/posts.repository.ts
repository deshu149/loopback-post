import {DefaultCrudRepository} from '@loopback/repository';
import {Posts, PostsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.id,
  PostsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Posts, dataSource);
  }
}
