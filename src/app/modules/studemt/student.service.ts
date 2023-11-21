import { Student } from '../student.model';
import { TStudent } from './student.inyerfac';

const createStudentIntoDB = async (student: TStudent) => {
  // const result = await StudentModel.create(student);//built in static method

  const data = new Student(student);
  const result = await data.save(); // built in instance method
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServicev = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
