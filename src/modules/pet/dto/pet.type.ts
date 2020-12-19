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
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

/**
 * * Pet & Local Imports
 */
import { AbstractType } from '@/shared/abstract.type';
import { PetKindType } from '@/modules/pet-kind/dto/pet-kind.type';
import { Gender, PetStatus } from '@/shared/constants';
import { UserType } from '@/modules/user/dto/user.type';
import { User } from '@/modules/user/user.model';

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
  @Field(_type => String, { description: 'Name of the pet' })
  name: string;

  @Field(_type => Int, { description: 'Age of the pet' })
  age: number;

  @Field(_type => Gender, { description: 'Gender of the pet'})
  gender: Gender;

  @Field(_type => String, { nullable: true, description: 'Picture of the pet' })
  picture: string;

  @Field(_type => PetStatus, { description: 'Status of the pet'})
  status: PetStatus;

  @Field(_type => PetKindType, { nullable: true, description: 'Animal kind of the pet' })
  kind: PetKindType;

  @Field(_type => UserType, { nullable: true })
  user: UserType;
}
