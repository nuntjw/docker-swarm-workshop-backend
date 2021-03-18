import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./app/routes";

const app = express();
console.log('hello')

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(router);



app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
