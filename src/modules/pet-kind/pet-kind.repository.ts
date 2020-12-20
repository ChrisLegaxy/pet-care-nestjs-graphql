/**
 * @file - PetKind's Repository
 * @description - Typeorm Repository
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Package Imports
 */
import { EntityRepository, Repository } from 'typeorm';

/**
 * * Internal Imports
 */
import { PetKind } from './pet-kind.model';

/**
 * @class PetKindRepository
 */
@EntityRepository(PetKind)
export class PetKindRepository extends Repository<PetKind> {
  /**
   * @description - first create the instance then save to the database
   *
   * @function createAndSave
   * @param petKind
   * @returns Promise<Pet>
   */
  async createAndSave(petKind: Partial<PetKind>): Promise<PetKind> {
    return await this.save(this.create(petKind));
  }
}
