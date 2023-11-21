import { Student } from '../student.model';
import { TStudent } from './student.inyerfac';

const createStudentIntoDB = async (student: TStudent) => {

  // creating custom static method
  if(await Student.isUserExists(student.id)){
    throw new Error('User Already Exists');
  }

  const result = await Student.create(student);//built in static method
  




  // const data = new Student(student);// create an instance
  // if(await data.isUserExists(student.id)){
  //   throw new Error('User Already Exists')  
  // }
  // const result = await data.save(); // built in instance method
  



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
