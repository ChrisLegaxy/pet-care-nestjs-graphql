/**
 * @file - Pet's GraphQL Object Type
 * @description - Object type for GraphQL
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Field, ObjectType } from '@nestjs/graphql';

/**
 * * External Imports
 */
import { AbstractType } from '@/shared/abstract.type';

/**
 * @class PetKindType
 */
@ObjectType('PetKind')
export class PetKindType extends AbstractType {
  @Field({ description: 'Animal kind of Pet' })
  name: string;
}
