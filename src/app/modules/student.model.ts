import { Schema, model, connect } from 'mongoose';
import { Student } from './studemt/student.inyerfac';


const studentSchema = new Schema<Student>({
    id: {type: String},
    name : {
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
    },
    gender: ["male","female"],
    dateOfBirth:{
        type: String
    }

    


}) 