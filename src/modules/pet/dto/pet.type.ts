/**
 * @file - Pet's GraphQL Object Type
 * @description - Object type for GraphQL
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Package Imports
 */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

/**
 * * Pet & Local Imports
 */
import { AbstractType } from '@/shared/abstract.type';
import { PetStatus } from '../pet.model';

/**
 * * Enum Registration
 */
registerEnumType(PetStatus, {
  name: 'PetStatus',
  description: 'Pre-defined sets of status for pets'
});

/**
 * @class PetType
 */
@ObjectType('Pet')
export class PetType extends AbstractType {
  @Field({ description: 'Name of the pet' })
  name: string;

  @Field({ description: 'Age of the pet' })
  age: number;

  @Field({ nullable: true, description: 'Picture of the pet' })
  picture: string;

  @Field(_type => PetStatus, { description: 'Status of the pet'})
  status: PetStatus;
}
