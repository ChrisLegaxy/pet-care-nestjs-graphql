/**
 * @file - Constants/Enum
 * @description - Contains all constants within the application
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

// 'IN' meaning the pet is inside the care taking
// 'OUT' meaning the is not inside or the owner took it back home
export enum PetStatus {
  IN = 'IN',
  OUT = 'OUT'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum Role {
  ADMIN = 'ADMIN',
  PET_OWNER = 'PET_OWNER'
}
