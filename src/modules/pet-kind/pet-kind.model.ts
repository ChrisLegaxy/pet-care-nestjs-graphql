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
 * * Other Node Packages Imports
 */
import { Column, Entity, OneToMany } from 'typeorm';

/**
 * * External Imports
 */
import { Abstract } from 'src/shared/abstract.model';
import { Pet } from '../pet/pet.model';

/**
 * @class PetKind
 */
@Entity()
export class PetKind extends Abstract {
  @Column()
  name: string;

  @OneToMany(_type => Pet, pet => pet.kind, { onDelete: 'SET NULL' })
  pets: Pet[];
}
