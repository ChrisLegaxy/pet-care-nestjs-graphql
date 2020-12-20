/**
 * @file - Pet's Model/Entity
 * @description - Typeorm Entity & GraphQL Object Type
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Node Package Imports
 */
import { Column, Entity, ManyToOne } from 'typeorm';

/**
 * * Nest Module Imports
 */
import { PetKind } from '@/modules/pet-kind/pet-kind.model';
import { User } from '@/modules/user/user.model';

/**
 * * Shared Imports
 */
import { Abstract } from '@/shared/abstract.model';
import { Gender, PetStatus } from '@/shared/constants';

/**
 * @class Pet
 */
@Entity()
export class Pet extends Abstract {
  /**
   * * Base
   */
  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  @Column({ nullable: true })
  picture: string;

  @Column({
    type: 'enum',
    enum: PetStatus,
    default: PetStatus.IN
  })
  status: PetStatus;

  /**
   * *Relationships
   */
  @ManyToOne(_type => PetKind, petKind => petKind.pets, { nullable: true, onDelete: 'SET NULL' })
  kind: PetKind;

  @ManyToOne(_type => User, user => user.pets, { onDelete: 'CASCADE' })
  user: User;
}
