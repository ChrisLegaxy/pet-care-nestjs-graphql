/**
 * @file - User's GraphQL Object Type
 * @description - Object type for GraphQL
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Package Imports
 */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

/**
 * * Nest Module Imports
 */
import { PetType } from '@/modules/pet/dto/pet.type';

/**
 * * Shared Imports
 */
import { AbstractType } from '@/shared/abstract.type';
import { Gender, Role } from '@/shared/constants';

/**
 * * Enum Registration
 */
registerEnumType(Gender, {
  name: 'Gender'
});

registerEnumType(Role, {
  name: 'Role'
});

/**
 * @class UserType
 */
@ObjectType('User')
export class UserType extends AbstractType {
  /**
   * * Base
   */
  @Field(_type => String)
  firstName: string;

  @Field(_type => String)
  lastName: string;

  @Field(_type => String)
  email: string;

  @Field(_type => Gender)
  gender: Gender;

  @Field(_type => Role)
  role: Role;

  @Field(_type => String, { nullable: true })
  phoneNumber: string;

  /**
   * * Social Sign In
   */
  @Field(_type => String, { nullable: true })
  google: string;

  @Field(_type => String, { nullable: true })
  facebook: string;

  /**
   * * Relationships
   */
  @Field(_type => [PetType], { nullable: true })
  pets: PetType[];
}
