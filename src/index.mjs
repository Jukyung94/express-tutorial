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

app.get('/api/users/:id/:name', (request, response) => {
  const id = request.params.id
  console.log(request.params)
  console.log("id", id)
  response.send(id)
})

app.get('/api/users/:id', (request, response) => {
  // console.log(request)
  const { query } = request
  console.log(query)
})