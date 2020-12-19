/**
 * @file - Owner's Model/Entity
 * @description - TypeORM Entity
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 19 Dec 2020
 */

/**
 * * Node Packages Imports
 */
import { Column, Entity, JoinTable, OneToOne } from 'typeorm';

/**
 * * External Imports
 */
import { Abstract } from '@/shared/abstract.model';

/**
 * * Application Module Imports
 */
import { User } from '@/modules/user/user.model';

/**
 * @class Owner
 */
@Entity()
export class Owner extends Abstract {
  @Column()
  google: string;

  @Column()
  facebook: string;

  @Column()
  phoneNumber: string;

  @OneToOne(
    _type => User,
    user => user.owner
  )
  @JoinTable()
  user: User;
}
