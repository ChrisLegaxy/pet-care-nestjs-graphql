/**
 * @file - Pet's GraphQL Input Type
 * @description - Input type for GraphQL mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Package Imports
 */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
}

/**
 * @class UpdatePetInput
 * @description - Input type for updating pet
 */
@InputType()
export class UpdatePetInput {
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
}
