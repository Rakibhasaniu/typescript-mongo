import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(express.json());
app.use(cors());
const getController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
}
app.get('/', getController);

export default app;
