/**
 * @file - User's Service
 * @description - Nest JS Service
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common';

/**
 * * Internal Imports
 */
import { User } from './user.model';
import { UserRepository } from './user.repository';

import { CreateUserInput, UpdateUserInput } from './dto/user.input';

/**
 * @class UserService
 */
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async find(): Promise<User[]> {
    return await this.userRepository.find();
  }
  public async findByIdOrFail(id: string): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async findByPetId(petId: string): Promise<User> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    queryBuilder
    .select()
    .leftJoin('user.pets', 'pet')
    .where('pet.id = :petId', { petId });

    return await queryBuilder.getOne();
  }

  public async create(createInput: CreateUserInput): Promise<User> {
    try {
      return await this.userRepository.createAndSave(createInput);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async update(
    id: string,
    updateInput: UpdateUserInput
  ): Promise<User> {
    await this.findByIdOrFail(id);

    try {
      await this.userRepository.update(id, updateInput);

      return await this.findByIdOrFail(id);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async delete(id: string): Promise<User> {
    const toBeDeleted = await this.findByIdOrFail(id);

    try {
      return await this.userRepository.remove(toBeDeleted);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
