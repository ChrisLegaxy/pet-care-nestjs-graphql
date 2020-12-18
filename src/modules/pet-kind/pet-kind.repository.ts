/**
 * @file - PetKind's Repository
 * @description - Typeorm Repository
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
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
export class PetKindRepository extends Repository<PetKind> {}
