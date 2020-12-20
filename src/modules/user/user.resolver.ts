/**
 * @file - User's Resolver
 * @description - GraphQL Resolver
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 10 Dec 2020
 */

/**
 * * Nest Module Imports
 */
import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';

/**
 * * Node Package Imports
 */
import { plainToClass } from 'class-transformer';

/**
 * * Nest Module Imports
 */
import { Pet } from '@/modules/pet/pet.model';
import { PetType } from '@/modules/pet/dto/pet.type';
import { PetService } from '@/modules/pet/pet.service';

/**
 * * Internal Imports
 */
import { User } from './user.model';
import { UserService } from './user.service';

import { UserType } from './dto/user.type';
import { CreateUserInput, UpdateUserInput } from './dto/user.input';

/**
 * @class PetKindResolver
 */
@Resolver(_of => UserType)
@Injectable()
export class UserResolver {
  constructor(private userService: UserService,
              private petService: PetService) {}

  /**
   * @description - query that return one user record by id
   *
   * @function user
   * @param id
   * @returns Promise<User>
   */
  @Query(_returns => UserType)
  async user(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.userService.findByIdOrFail(id);
  }

  /**
   * @description - query that return all user records
   *
   * @function users
   * @param none
   * @returns Promise<User[]>
   */
  @Query(_returns => [UserType])
  async users(): Promise<User[]> {
    return this.userService.find();
  }

  /**
   * @description - mutation that create a user record
   *
   * @function createUser
   * @param user - type of CreateUserInput
   * @returns Promise<User>
   */
  @Mutation(_returns => UserType)
  async createUser(@Args('user') user: CreateUserInput): Promise<User> {
    /**
     * ! must cast with plainToClass because user input will return as [Object: null prototype]
     */
    return await this.userService.create(plainToClass(CreateUserInput, user));
  }

  /**
   * @description - mutation that update a user record
   *
   * @function updateUser
   * @param user - type of UpdateUserInput
   * @returns Promise<User>
   */
  @Mutation(_returns => UserType)
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('user') user: UpdateUserInput
  ): Promise<User> {
    /**
     * ! must cast with plainToClass because user input will return as [Object: null prototype]
     */
    return await this.userService.update(id, plainToClass(UpdateUserInput, user));
  }

  /**
   * @description - mutation that delete a user record
   *
   * @function deleteUser
   * @param user - type of UpdateUserInput
   * @returns Promise<User>
   */
  @Mutation(_returns => UserType)
  async deleteUser(
    @Args('id', { type: () => String }) id: string
  ): Promise<User> {
    return await this.userService.delete(id);
  }

  @ResolveField(_returns => [PetType])
  async pets(@Parent() user: User): Promise<Pet[]> {
    if (!user.id) { return null; }

    return await this.petService.findByUserId(user.id);
  }
}
