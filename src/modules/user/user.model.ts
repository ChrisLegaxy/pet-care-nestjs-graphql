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
import { Column, Entity } from 'typeorm';

/**
 * * External Imports
 */
import { Abstract } from 'src/shared/abstract.model';
import { Gender } from '@/shared/constants';

/**
 * @class User
 */
@Entity()
export class User extends Abstract {
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
}
