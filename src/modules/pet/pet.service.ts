/**
 * @file - Pet's Service
 * @description - Nest JS Service
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Package Imports
 */
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common';

/**
 * * Pet & Local Imports
 */
import { Pet } from './pet.model';
import { PetRepository } from './pet.repository';

import { CreatePetInput, UpdatePetInput } from './dto/pet.input';
import { plainToClass } from 'class-transformer';

/**
 * @class PetService
 */
@Injectable()
export class PetService {
  constructor(private catRepository: PetRepository) {}

  public async find(): Promise<Pet[]> {
    return await this.catRepository.find();
  }

  public async findByIdOrFail(id: string): Promise<Pet> {
    try {
      return await this.catRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async create(createPetInput: CreatePetInput): Promise<Pet> {
    try {
      return await this.catRepository.createAndSave(createPetInput);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async update(
    id: string,
    updateBodyDto: UpdatePetInput
  ): Promise<Pet> {
    await this.findByIdOrFail(id);

    const myPet = plainToClass(UpdatePetInput, updateBodyDto);
    console.log(myPet);
    try {
      await this.catRepository.update(id, myPet);

      return await this.findByIdOrFail(id);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async delete(id: string): Promise<Pet> {
    try {
      const yo = await this.catRepository.remove(await this.findByIdOrFail(id));
      console.log(yo);
      return yo;
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
