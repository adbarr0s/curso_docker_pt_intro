const express = require('express')
const app = express()
const port = 5001

app.get('/' , (req, resp) => {
resp.send('Ola,  minha imagem nova, correndo na porta '+port)
});

app.listen(port, () => {
    console.log('Executando na porta :${port}')
});
