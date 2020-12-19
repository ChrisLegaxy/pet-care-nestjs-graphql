/**
 * @file - User's GraphQL Args Type
 * @description - Args type for GraphQL query & mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {}

@InputType()
export class UserUpdateInput {}
