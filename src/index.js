import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3000");
});