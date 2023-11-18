import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './studemt/student.inyerfac';


const userNameSchema = new Schema<UserName>({
        firstName: {
            type: String,
            required : true,
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
            required: true,
        }
})

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
        }
    
})

const localGuardianSChema = new Schema<LocalGuardian>(
    {
        name : {
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
        address:{
            type:String,
            required:true,
        }
    },
)

const studentSchema = new Schema<Student>({
    id: {type: String},
    name : userNameSchema,
    gender: ["male","female"],
    dateOfBirth:{
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    bloodGroup: ["AB+","AB-","A+","A-","B+","B-","0+","0-"],
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
guardian: guardianSchema,
localGuardian : localGuardianSChema,
profileImg: {
    type: String,
},
isActive: ['active','noActive']
}) 
 export const StudentModel = model<Student>('Student',studentSchema)