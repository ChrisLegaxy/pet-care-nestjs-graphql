/**
 * @file - Pet's Repository
 * @description - Typeorm Repository
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Node Package Imports
 */
import { EntityRepository, Repository } from 'typeorm';

/**
 * * Internal Imports
 */
import { Pet } from './pet.model';

/**
 * @class PetRepository
 */
@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
  /**
   * @description - first create the instance then save to the database
   *
   * @function createAndSave
   * @param pet
   * @returns Promise<Pet>
   */
  async createAndSave(pet: Partial<Pet>): Promise<Pet> {
    return await this.save(this.create(pet));
  }
}
