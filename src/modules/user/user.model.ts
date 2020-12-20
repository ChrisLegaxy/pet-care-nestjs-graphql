/**
 * @file - User's Model/Entity
 * @description - TypeORM Entity
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 19 Dec 2020
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
import { Gender, Role } from '@/shared/constants';

/**
 * @class User
 */
@Entity()
export class User extends Abstract {
  /**
   * * Base
   */
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.PET_OWNER
  })
  role: Role;

  @Column({ nullable: true })
  phoneNumber: string;

  /**
   * * Social Sign-In
   */
  @Column({ nullable: true })
  google: string;

  @Column({ nullable: true })
  facebook: string;

  /**
   * * Relationships
   */
  @OneToMany(_type => Pet, pet => pet.user, { nullable: true, onDelete: 'CASCADE' })
  pets: Pet[];
}
