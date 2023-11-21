import { StudentModel } from '../student.model';
import { Student } from './student.inyerfac';

const createStudentIntoDB = async (student: Student) => {
  // const result = await StudentModel.create(student);//built in static method

  const data = new StudentModel(student);
  const result = await data.save(); // built in instance method
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServicev = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
