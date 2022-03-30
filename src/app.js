import 'dotenv/config'; // use this import to access enviroment variables
import cors from 'cors';
import express from 'express';

const port  = process.env.PORT;


const app = express();
app.use(cors);







app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);