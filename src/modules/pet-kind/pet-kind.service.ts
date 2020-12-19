/**
 * @file - PetKind's Service
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
import { PetKind } from './pet-kind.model';
import { PetKindRepository } from './pet-kind.repository';

import { CreatePetKindInput, UpdatePetKindInput } from './dto/pet-kind.input';

/**
 * @class PetKindService
 */
@Injectable()
export class PetKindService {
  constructor(private petKindRepository: PetKindRepository) {}

  public async find(): Promise<PetKind[]> {
    return await this.petKindRepository.find();
  }

  public async findByPetId(petId: string): Promise<PetKind> {
    const queryBuilder = this.petKindRepository.createQueryBuilder('petKind');

    queryBuilder
    .select()
    .leftJoin('petKind.pets', 'pet')
    .where('pet.id = :petId', { petId });

    return await queryBuilder.getOne();
  }

  public async findByIdOrFail(id: string): Promise<PetKind> {
    try {
      return await this.petKindRepository.findOneOrFail({  }, { });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async create(createInput: CreatePetKindInput): Promise<PetKind> {
    try {
      return await this.petKindRepository.createAndSave(createInput);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async update(
    id: string,
    updateInput: UpdatePetKindInput
  ): Promise<PetKind> {
    await this.findByIdOrFail(id);

    try {
      await this.petKindRepository.update(id, updateInput);

      return await this.findByIdOrFail(id);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  public async delete(id: string): Promise<PetKind> {
    try {
      return await this.petKindRepository.remove(await this.findByIdOrFail(id));
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
