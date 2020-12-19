/**
 * @file - Pet's GraphQL Input Type
 * @description - Input type for GraphQL mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Field, InputType, Int } from '@nestjs/graphql';

/**
 * * Node Packages Imports
 */
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

/**
 * * External Imports
 */
import { PetKind } from '@/modules/pet-kind/pet-kind.model';

/**
 * * Internal Imports
 */
import { PetStatus } from '../pet.model';

/**
 * @class CreatePetInput
 * @description - Input type for creating pet
 */
@InputType()
export class CreatePetInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  picture?: string;

  @Field(_type => PetStatus, { nullable: true })
  @IsNotEmpty()
  status?: PetStatus;

  /**
   * * Relationships
   */
  @Field(() => String, { nullable: true })
  @IsUUID()
  @IsNotEmpty()
  kindId?: string;
  kind: PetKind;
}

/**
 * @class UpdatePetInput
 * @description - Input type for updating pet
 */
@InputType()
export class UpdatePetInput {
  /**
   * * Base
   */
  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsNotEmpty()
  age?: number;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  picture?: string;

  @Field(_type => PetStatus, { nullable: true })
  @IsNotEmpty()
  status?: PetStatus;

  /**
   * * Relationships
   */
  @Field(() => String, { nullable: true })
  @IsUUID()
  @IsNotEmpty()
  kindId: string;
  kind: PetKind;
}
