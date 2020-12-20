/**
 * @file - PetKind's Model/Entity
 * @description - Typeorm Entity & GraphQL Object Type.
 *                This class define animal Kind of the pet. Example: Dog, Cat etc.🐱🐺🐶
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Node Package Imports
 */
import { Column, Entity, OneToMany } from 'typeorm';

/**
 * * Nest Module Imports
 */
import { Pet } from '@/modules/pet/pet.model';

/**
 * * Shared Imports
 */
import { Abstract } from '@/shared/abstract.model';


/**
 * @class PetKind
 */
@Entity()
export class PetKind extends Abstract {
  /**
   * * Base
   */
  @Column()
  name: string;

  /**
   * * Relationships
   */
  @OneToMany(_type => Pet, pet => pet.kind, { onDelete: 'CASCADE' })
  pets: Pet[];
}
