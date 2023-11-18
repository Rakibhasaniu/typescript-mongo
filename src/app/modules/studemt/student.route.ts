import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

//will call controller function
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:student_id', StudentController.getSingleStudent);

export const StudentRoutes = router;
