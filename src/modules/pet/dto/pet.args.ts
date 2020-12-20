/**
 * @file - Pet's GraphQL Args Type
 * @description - Args type for GraphQL query & mutation
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Package Imports
 */
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PetArgs {}
