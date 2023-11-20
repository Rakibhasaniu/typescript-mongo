import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './studemt/student.inyerfac';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20,'20 word er beshi dis na'],
    minlength:[4,'4 tar kom dis na'],
    validate: function(value){
      console.log(value);
    }
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
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

const localGuardianSChema = new Schema<LocalGuardian>({
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

const studentSchema = new Schema<Student>({
  id: { 
    type: String,
    required: true,
    unique: true
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
export const StudentModel = model<Student>('Student', studentSchema);
