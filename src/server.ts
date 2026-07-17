import express from "express";

const app = express();

app.use(express.json());

app.get("/customers", (request, response) => {
  const customers = [
    {
      name: "Marcelo Pessoa",
      status: true,
    },
    {
      name: "Ralf",
      status: true,
    },
    {
      name: "Programação",
      status: false,
    },
  ];

  response.status(200).json(customers);
});

app.listen(3000);
