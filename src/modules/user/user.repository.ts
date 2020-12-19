/**
 * @file - User's Repository
 * @description - Typeorm Repository
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 19 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { EntityRepository, Repository } from 'typeorm';

/**
 * * Internal Imports
 */
import { User } from './user.model';

/**
 * @class UserRepository
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /**
   * @description - first create the instance then save to the database
   *
   * @function createAndSave
   * @param user
   * @returns Promise<Pet>
   */
  async createAndSave(user: Partial<User>): Promise<User> {
    return await this.save(this.create(user));
  }
}
