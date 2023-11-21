// import { Schema, model, connect } from 'mongoose';

import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'ab+' | 'ab-' | 'a+' | 'a-' | 'b+' | 'b-' | '0+' | '0-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'noActive';
};

//for custom instance method
// export type TStudentMethods = {
//   isUserExists(id : string) : Promise<TStudent | null>
// }

// export type TStudentModel  = Model<TStudent, Record<string, never>, TStudentMethods>;


//for custom static method
export interface StudentModel extends Model<TStudent>{
  isUserExists(id : string) : Promise<TStudent | null>
}