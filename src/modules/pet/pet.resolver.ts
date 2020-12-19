/**
 * @file - Pet's Resolver
 * @description - GraphQL Resolver
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS * Package Imports
 */
import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';

/**
 * * Internal Imports
 */
import { Pet } from './pet.model';
import { PetService } from './pet.service';

import { PetType } from './dto/pet.type';
import { CreatePetInput, UpdatePetInput } from './dto/pet.input';
import { PetKindService } from '../pet-kind/pet-kind.service';
import { PetKindType } from '../pet-kind/dto/pet-kind.type';
import { PetKind } from '../pet-kind/pet-kind.model';
import { UserType } from '../user/dto/user.type';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

/**
 * @class PetResolver
 */
@Resolver(_of => PetType)
@Injectable()
export class PetResolver {
  constructor(private petService: PetService,
              private petKindService: PetKindService,
              private userService: UserService) {}

  /**
   * @description - query that return one pet record by id
   *
   * @function pet
   * @param id
   * @returns Promise<Pet>
   */
  @Query(_returns => PetType)
  async pet(@Args('id', { type: () => String }) id: string): Promise<Pet> {
    return this.petService.findByIdOrFail(id);
  }

  /**
   * @description - query that return all pet records
   *
   * @function pets
   * @param none
   * @returns Promise<Pet[]>
   */
  @Query(_returns => [PetType])
  async pets(): Promise<Pet[]> {
    return this.petService.find();
  }

  /**
   * @description - mutation that create a pet record
   *
   * @function createPet
   * @param pet - type of CreatePetInput
   * @returns Promise<Pet>
   */
  @Mutation(_returns => PetType)
  async createPet(@Args('pet') pet: CreatePetInput): Promise<Pet> {
    /**
     * ! must cast with plainToClass because pet input will return as [Object: null prototype]
     */
    return await this.petService.create(plainToClass(CreatePetInput, pet));
  }

  /**
   * @description - mutation that update a pet record
   *
   * @function updatePet
   * @param pet - type of UpdatePetInput
   * @returns Promise<Pet>
   */
  @Mutation(_returns => PetType)
  async updatePet(
    @Args('id', { type: () => String }) id: string,
    @Args('pet') pet: UpdatePetInput
  ): Promise<Pet> {
    /**
     * ! must cast with plainToClass because pet input will return as [Object: null prototype]
     */
    return await this.petService.update(id, plainToClass(UpdatePetInput, pet));
  }

  /**
   * @description - mutation that delete a pet record
   *
   * @function deletePet
   * @param pet - type of UpdatePetInput
   * @returns Promise<Pet>
   */
  @Mutation(_returns => PetType)
  async deletePet(
    @Args('id', { type: () => String }) id: string
  ): Promise<Pet> {
    return await this.petService.delete(id);
  }

  @ResolveField(_returns => PetKindType)
  async kind(@Parent() pet): Promise<PetKind> {
    return await this.petKindService.findByPetId(pet.id);
  }

  @ResolveField(_returns => UserType)
  async user(@Parent() pet: Pet): Promise<User> | null {
    if (!pet.id) { return null; }

    return await this.userService.findByPetId(pet.id);
  }
}
