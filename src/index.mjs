import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
});

//localhost:3000

app.get("/", (request, response) => {
  response.status(201).send({ msg: "hello" })
});

app.get('/api/users', (request, response) => {
  response.send([{ id: 1, username: 'snson', displayNmae: "Ansone"}])
})