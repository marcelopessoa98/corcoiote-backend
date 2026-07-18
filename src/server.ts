import express from "express";
import CustomerRouter from "./routes/costumer.route.ts";

const app = express();

app.use('/customers', CustomerRouter);
             
app.listen(3000);
