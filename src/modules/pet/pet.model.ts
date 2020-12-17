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
import { Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

/**
 * * Local Imports
 */
import { Abstract } from 'src/shared/abstract.model';

// 'IN' meaning the pet is inside the care taking
// 'OUT' meaning the is not inside or the owner took it back home
export enum PetStatus {
  IN = 'IN',
  OUT = 'OUT'
}

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
}
