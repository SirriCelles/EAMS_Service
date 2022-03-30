import 'dotenv/config'; // use this import to access enviroment variables
import express from 'express';



const app = express();
const port  = process.env.PORT;





app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);