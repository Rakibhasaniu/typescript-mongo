import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt'
import config from '../config/index';

import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentModel,
  TUserName,
} from './studemt/student.inyerfac';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20,'20 word er beshi dis na'],
    minlength:[4,'4 tar kom dis na'],
    validate: {
      validator:function(value : string){
        const firstName= value.charAt(0).toUpperCase() + value.slice(1);
        return firstName === value;
      },
      message: '{VALUE} IS NOT IN CAPITALIZE FORMAT'
    }
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value : string) => validator.isAlpha(value),
      message:'{VALUE} IS NOT VALID' 
    }
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSChema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
//normal
// const studentSchema = new Schema<TStudent>({
//   id: { 
//     type: String,
//     required: true,
//     unique: true
//    },
//   name: {
//     type: userNameSchema,
//     required: [true,'First Name is Requred'],
//   },
//   gender:{
//     type: String,
//     enum: {
//       values:  ['male', 'female','other'],
//       message: 'uporer 3 tar moddhe 1 ta hbe'
//     },
//     required: true
//   },
//   dateOfBirth: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   emergencyContactNo: {
//     type: String,
//     required: true,
//   },
//   bloodGroup: {
//     type: String,
//     enum: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', '0+', '0-'],
    
//   },
//   presentAddress: {
//     type: String,
//     required: true,
//   },
//   permanentAddress: {
//     type: String,
//     required: true,
//   },
//   guardian: guardianSchema,
//   localGuardian: {
//     type: localGuardianSChema,
//     required: true,
//   },
//   profileImg: {
//     type: String,
//   },
//   isActive: {
//     type: String,
//     enum: ['active', 'noActive'],
//     default:'active',
//     // required: true
//   },
// });
//for custom static method
const studentSchema = new Schema<TStudent, StudentModel>({
  id: { 
    type: String,
    required: true,
    unique: true
   },
  password: { 
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
    minlength: 5,
   },
  name: {
    type: userNameSchema,
    required: [true,'First Name is Requred'],
  },
  gender:{
    type: String,
    enum: {
      values:  ['male', 'female','other'],
      message: 'uporer 3 tar moddhe 1 ta hbe'
    },
    required: true
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', '0+', '0-'],
    
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: {
    type: localGuardianSChema,
    required: true,
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'noActive'],
    default:'active',
    // required: true
  },
});
//for custom instance method
// const studentSchema = new Schema<TStudent>({
//   id: { 
//     type: String,
//     required: true,
//     unique: true
//    },
//   name: {
//     type: userNameSchema,
//     required: [true,'First Name is Requred'],
//   },
//   gender:{
//     type: String,
//     enum: {
//       values:  ['male', 'female','other'],
//       message: 'uporer 3 tar moddhe 1 ta hbe'
//     },
//     required: true
//   },
//   dateOfBirth: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   emergencyContactNo: {
//     type: String,
//     required: true,
//   },
//   bloodGroup: {
//     type: String,
//     enum: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', '0+', '0-'],
    
//   },
//   presentAddress: {
//     type: String,
//     required: true,
//   },
//   permanentAddress: {
//     type: String,
//     required: true,
//   },
//   guardian: guardianSchema,
//   localGuardian: {
//     type: localGuardianSChema,
//     required: true,
//   },
//   profileImg: {
//     type: String,
//   },
//   isActive: {
//     type: String,
//     enum: ['active', 'noActive'],
//     default:'active',
//     // required: true
//   },
// });

//pre save middleware : will work on create() and save() method
studentSchema.pre('save', async function(next) {
  const user = this;
  user.password = await bcrypt.hash(user.password,Number(config.bcrypt_salt_round))
  next();
})

//post save middleware
studentSchema.post('save', function(){
  console.log(this,'post hook : we saved our data')
})



//creating custom static method
studentSchema.statics.isUserExists = async function(id : string){
  const existingUser = await Student.findOne({id});
  return existingUser;
}

//creating custom instance method
// studentSchema.methods.isUserExists = async function( id : string){
//   const existingUser = await Student.findOne({id});
//   return existingUser;
// }

export const Student = model<TStudent, TStudentModel>('Student', studentSchema);
