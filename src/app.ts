import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/studemt/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());


//application routes
app.use('/api/v1/students', StudentRoutes)
const getController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
}
app.use('/api/v1/students',StudentRoutes);

export default app;
