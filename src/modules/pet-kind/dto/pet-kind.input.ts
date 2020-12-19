/**
 * @file - PetKind's GraphQL Input Type
 * @description - Input type for GraphQL mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Field, InputType } from '@nestjs/graphql';

/**
 * * Packages Imports
 */
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

/**
 * @class CreatePetKindInput
 * @description - Input type for creating pet
 */
@InputType()
export class CreatePetKindInput {
  /**
   * * Base
   */
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;
}

/**
 * @class UpdatePetKindInput
 * @description - Input type for updating pet
 */
@InputType()
export class UpdatePetKindInput {
  /**
   * * Base
   */
  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string;
}
