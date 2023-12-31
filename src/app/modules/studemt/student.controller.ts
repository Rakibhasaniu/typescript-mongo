import { Request, Response } from 'express';
import { StudentServicev } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    
    const { student: studentData } = req.body;
    //will call service function to send service data
    const result = await StudentServicev.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServicev.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student is getting successfuly',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const student_id = req.params.student_id;
    const result = await StudentServicev.getSingleStudentFromDB(student_id);

    res.status(200).json({
      success: true,
      message: 'Single data getting successfuly',
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};


const deleteData = async (req: Request, res: Response) => {
  try {
    const student_id = req.params.student_id;
    const result = await StudentServicev.deletedFromDB(student_id);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteData
};
