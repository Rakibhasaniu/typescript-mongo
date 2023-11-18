import { Request, Response } from "express";
import { StudentServicev } from "./student.service";

const createStudent =  async (req: Request, res: Response)=>{
    try{
        const {student : studentData} = req.body;

    //will call service function to send service data
    const result = await StudentServicev.createStudentIntoDB(studentData);

    //send response
    res.status(200).json({
        success : true,
        message: 'Student is created successfully',
        data:  result
    })
    } catch (err) {
        console.log(err);
    }
}

export const StudentController = {
    createStudent,
}