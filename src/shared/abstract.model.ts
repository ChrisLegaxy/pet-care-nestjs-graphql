/**
 * @file - Abstract Entity
 * @description - An abstract entity with the needed properties for other entities to extend
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS & Local Imports
 */
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

/**
 * @class Abstract
 */
@Entity()
export abstract class Abstract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone'
  })
  updatedAt: Date;
}
