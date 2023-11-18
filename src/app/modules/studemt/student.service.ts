import { StudentModel } from "../student.model";
import { Student } from "./student.inyerfac";


const createStudentIntoDB = async (student: Student) => {

    const result = await StudentModel.create(student);
    return result;   

}

export const StudentServicev = {
    createStudentIntoDB
}