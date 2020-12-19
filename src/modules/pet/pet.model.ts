/**
 * @file - Pet's Model/Entity
 * @description - Typeorm Entity & GraphQL Object Type
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Package Imports
 */
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

/**
 * * Local Imports
 */
import { Abstract } from 'src/shared/abstract.model';
import { PetKind } from '../pet-kind/pet-kind.model';
import { User } from '../user/user.model';
import { PetStatus } from '@/shared/constants';

/**
 * @class Pet
 */
@Entity()
export class Pet extends Abstract {
  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  picture: string;

  @Column({
    type: 'enum',
    enum: PetStatus,
    default: PetStatus.IN
  })
  status: PetStatus;

  @ManyToOne(_type => PetKind, petKind => petKind.pets, { nullable: true, onDelete: 'SET NULL' })
  kind: PetKind;

  @ManyToOne(_type => User, user => user.pets, { onDelete: 'CASCADE' })
  user: User;
}
