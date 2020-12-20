/**
 * @file - Pet's Service
 * @description - Nest JS Service
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Package Imports
 */
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common';

/**
 * * Nest Module Imports
 */
import { PetKindService } from '../pet-kind/pet-kind.service';
import { UserService } from '../user/user.service';

/**
 * * Internal Imports
 */
import { Pet } from './pet.model';
import { PetRepository } from './pet.repository';

import { CreatePetInput, UpdatePetInput } from './dto/pet.input';

/**
 * @class PetService
 */
@Injectable()
export class PetService {
  constructor(private petRepository: PetRepository,
              private petKindService: PetKindService,
              private userService: UserService) {}

  public async find(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  public async findByIdOrFail(id: string): Promise<Pet> {
    try {
      return await this.petRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async findByUserId(userId: string): Promise<Pet[]> {
    const user = await this.userService.findByIdOrFail(userId);

    return await this.petRepository.find({ user });
  }

  public async create(createInput: CreatePetInput): Promise<Pet> {
    if (createInput.kindId) {
      createInput.kind = await this.petKindService.findByIdOrFail(createInput.kindId);
    }

    if (createInput.userId) {
      createInput.user = await this.userService.findByIdOrFail(createInput.userId);
    }

    try {
      return await this.petRepository.createAndSave(createInput);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async update(
    id: string,
    updateInput: UpdatePetInput
  ): Promise<Pet> {
    await this.findByIdOrFail(id);

    if (updateInput.kindId) {
      updateInput.kind = await this.petKindService.findByIdOrFail(updateInput.kindId);
    }

    try {
      await this.petRepository.update(id, updateInput);

      return await this.findByIdOrFail(id);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async delete(id: string): Promise<Pet> {
    const toBeDeleted = await this.findByIdOrFail(id);

    try {
      return await this.petRepository.remove(toBeDeleted);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
