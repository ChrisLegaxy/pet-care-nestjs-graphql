/**
 * @file - PetKind's Resolver
 * @description - GraphQL Resolver
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

/**
 * * Node Packages Imports
 */
import { plainToClass } from 'class-transformer';

/**
 * * Internal Imports
 */
import { PetKind } from './pet-kind.model';
import { PetKindService } from './pet-kind.service';

import { PetKindType } from './dto/pet-kind.type';
import { CreatePetKindInput, UpdatePetKindInput } from './dto/pet-kind.input';

/**
 * @class PetKindResolver
 */
@Resolver(_of => PetKindType)
@Injectable()
export class PetKindResolver {
  constructor(private petKindService: PetKindService) {}

  /**
   * @description - query that return one petKind record by id
   *
   * @function petKind
   * @param id
   * @returns Promise<PetKind>
   */
  @Query(_returns => PetKindType)
  async petKind(@Args('id', { type: () => String }) id: string): Promise<PetKind> {
    return this.petKindService.findByIdOrFail(id);
  }

  /**
   * @description - query that return all petKind records
   *
   * @function petKinds
   * @param none
   * @returns Promise<PetKind[]>
   */
  @Query(_returns => [PetKindType])
  async petKinds(): Promise<PetKind[]> {
    return this.petKindService.find();
  }

  /**
   * @description - mutation that create a petKind record
   *
   * @function createPetKind
   * @param petKind - type of CreatePetKindInput
   * @returns Promise<PetKind>
   */
  @Mutation(_returns => PetKindType)
  async createPetKind(@Args('petKind') petKind: CreatePetKindInput): Promise<PetKind> {
    /**
     * ! must cast with plainToClass because petKind input will return as [Object: null prototype]
     */
    return await this.petKindService.create(plainToClass(CreatePetKindInput, petKind));
  }

  /**
   * @description - mutation that update a petKind record
   *
   * @function updatePetKind
   * @param petKind - type of UpdatePetKindInput
   * @returns Promise<PetKind>
   */
  @Mutation(_returns => PetKindType)
  async updatePetKind(
    @Args('id', { type: () => String }) id: string,
    @Args('petKind') petKind: UpdatePetKindInput
  ): Promise<PetKind> {
    /**
     * ! must cast with plainToClass because petKind input will return as [Object: null prototype]
     */
    return await this.petKindService.update(id, plainToClass(UpdatePetKindInput, petKind));
  }

  /**
   * @description - mutation that delete a petKind record
   *
   * @function deletePetKind
   * @param petKind - type of UpdatePetKindInput
   * @returns Promise<PetKind>
   */
  @Mutation(_returns => PetKindType)
  async deletePetKind(
    @Args('id', { type: () => String }) id: string
  ): Promise<PetKind> {
    return await this.petKindService.delete(id);
  }
}
