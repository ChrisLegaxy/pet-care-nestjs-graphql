/**
 * @file - Abstract Object Type
 * @description - An abstract object type with the needed fields for other object type to extend
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Package Imports
 */
import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @class AbstractType
 */
@ObjectType('Abstract')
export class AbstractType {
  @Field(_type => String, { nullable: true, description: 'Unique indentifier' })
  id: string;

  @Field(_type => Date, { description: 'Record created at date' })
  createdAt: Date;

  @Field(_type => Date, { description: 'Record updated at date' })
  updatedAt: Date;
}
