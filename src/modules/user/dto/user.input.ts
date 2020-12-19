/**
 * @file - User's GraphQL Input Type
 * @description - Input type for GraphQL query & mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 19 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Field, InputType } from '@nestjs/graphql';

/**
 * * Node Packages Imports
 */
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

/**
 * * External Imports
 */
import { Gender, Role } from '@/shared/constants';

/**
 * @class CreateUserInput
 * @description - For creating user via GraphQL mutation only (does not inlcude social sign in)
 */
@InputType()
export class CreateUserInput {
  /**
   * * Base
   */
  @Field(_type => String)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field(_type => String)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(_type => String)
  @IsString()
  @IsNotEmpty()
  email: string;

  @Field(_type => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(_type => Gender)
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @Field(_type => Role, { nullable: true } )
  role?: Role;

  @Field(_type => String, { nullable: true })
  phoneNumber?: string;
}

/**
 * @class SocialUserInput
 * @description - Purely for creating user via social sign in
 */
@InputType()
export class SocialUserInput {
  /**
   * * Social Sign In
   */
  @Field(_type => String, { nullable: true })
  google?: string;

  @Field(_type => String, { nullable: true })
  facebook?: string;
}

/**
 * @class UpdateUserInput
 */
@InputType()
export class UpdateUserInput {
  /**
   * * Base
   */
  @Field(_type => String, { nullable: true })
  firstName?: string;

  @Field(_type => String, { nullable: true })
  lastName?: string;

  @Field(_type => String, { nullable: true })
  email?: string;

  @Field(_type => String, { nullable: true })
  password?: string;

  @Field(_type => String, { nullable: true })
  gender?: Gender;

  @Field(_type => Role, { nullable: true })
  role?: Role;

  @Field(_type => String, { nullable: true })
  phoneNumber?: string;

  /**
   * * Social Sign In
   */
  @Field(_type => String, { nullable: true })
  google?: string;

  @Field(_type => String, { nullable: true })
  facebook?: string;
}
