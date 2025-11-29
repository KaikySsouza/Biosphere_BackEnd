import app from './app'

const port = 8081
app.listen(port, () => {
  console.log()
  console.log(`Servidor rodando no endereço https://localhost:${port}`)
});
