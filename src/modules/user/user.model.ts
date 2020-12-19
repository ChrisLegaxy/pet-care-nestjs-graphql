/**
 * @file - User's Model/Entity
 * @description - TypeORM Entity
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 19 Dec 2020
 */

/**
 * * Node Packages Imports
 */
import { Column, Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';

/**
 * * External Imports
 */
import { Abstract } from '@/shared/abstract.model';
import { Gender, Role } from '@/shared/constants';
import { Pet } from '../pet/pet.model';

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

  /**
   * * Social Sign-In
   */
  @Column()
  google: string;

  @Column()
  facebook: string;

  @Column()
  phoneNumber: string;

  /**
   * * Relationships
   */
  @OneToMany(_type => Pet, pet => pet.user, { nullable: true })
  pets: Pet[];
}
